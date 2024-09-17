"use server";
import { revalidatePath } from "next/cache";
import { ProductModel, UserModel } from "./models";
import { connectToDatabase } from "./utils";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export const addUser = async (formData) => {
  const { username, email, password, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  try {
    connectToDatabase();
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
  } catch (error) {
    throw new Error(error);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  try {
    connectToDatabase();
    await UserModel.findByIdAndUpdate(id, {
      username,
      email,
      isAdmin,
      isActive,
      address,
    });
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
    await ProductModel.findByIdAndUpdate(id, {
      title,
      price,
      stock,
      size,
      category,
      desc,
    });
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
