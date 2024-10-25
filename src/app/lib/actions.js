"use server";
import { revalidatePath } from "next/cache";
import { ProductModel, UserModel } from "./models";
import { connectToDatabase } from "./utils";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { signIn } from "../auth";

export const addUser = async (formData) => {
  const { username, email, password, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  try {
    connectToDatabase();
    if (await UserModel.exists({ $or: [{ email }, { username }] })) {
      return { error: "User already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
      isAdmin,
      isActive,
      address,
    });
    await newUser.save();
    return {};
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  try {
    connectToDatabase();

    if (await UserModel.exists({ $or: [{ email }, { username }] })) {
      return { error: "This email or username is already in use" };
    }

    const updateFields = {
      username,
      email,
      password,
      phone,
      isAdmin,
      isActive,
      address,
    };

    Object.keys(updateFields).forEach((key) => {
      if (updateFields[key] === "" || updateFields[key] === undefined) {
        delete updateFields[key];
      }
    });

    await UserModel.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error(error);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDatabase();
    await UserModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
  revalidatePath("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, price, stock, size, category, desc } =
    Object.fromEntries(formData);

  try {
    connectToDatabase();

    if (await ProductModel.exists({ title })) {
      return { error: "Product already exists" };
    }

    const newProduct = new ProductModel({
      title,
      price,
      stock,
      size,
      category,
      desc,
    });
    await newProduct.save();
  } catch (error) {
    throw new Error(error);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, price, stock, size, category, desc } =
    Object.fromEntries(formData);

  try {
    connectToDatabase();

    if (await ProductModel.exists({ title })) {
      return { error: "Product already exists" };
    }

    const updateFields = {
      title,
      price,
      stock,
      size,
      category,
      desc,
    };

    Object.keys(updateFields).forEach((key) => {
      if (updateFields[key] === "" || updateFields[key] === undefined) {
        delete updateFields[key];
      }
    });

    await ProductModel.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error(error);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDatabase();
    await ProductModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
  revalidatePath("/dashboard/products");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    connectToDatabase();
    const user = await UserModel.findOne({ username });

    if (!user || !user.isAdmin) {
      return "You are not authorized to access this page.";
    }

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (result.error) {
      return result.error;
    }
  } catch (error) {
    if (error.message.includes("CredentialsSignin")) {
      return "Wrong username or password. Please try again.";
    }
    throw error;
  }

  revalidatePath(`/dashboard`);
  redirect(`/dashboard`);
};
