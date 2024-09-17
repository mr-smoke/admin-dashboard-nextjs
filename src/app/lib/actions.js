"use server";
import { revalidatePath } from "next/cache";
import { UserModel } from "./models";
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
