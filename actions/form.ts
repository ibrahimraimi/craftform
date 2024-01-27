"use server";

import prisma from "@/lib/prisma";
import { formSchema } from "@/schemas/form";
import { currentUser } from "@clerk/nextjs";

class UserNotFoundError extends Error {}

export async function GetFormStats() {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundError();
  }

  const stats = await prisma.form.aggregate({
    where: {
      userId: user.id,
    },
    _sum: {
      visits: true,
      submissions: true,
    },
  });

  const visits = stats._sum.visits || 0;
  const submissions = stats._sum.submissions || 0;

  let submissionRate = 0;

  if (visits > 0) {
    submissionRate = (submissions / visits) * 100;
  }

  const bounceRate = 100 - submissionRate;

  return {
    visits,
    submissions,
    submissionRate,
    bounceRate,
  };
}

export async function CreateForm() {}

export async function GetForm() {}

export async function GetFormById() {}

export async function UpdateFormFormContent() {}

export async function PublishForm() {}

export async function GetFormContentByUrl() {}

export async function SubmitForm() {}

export async function GetFormWithSubmissions() {}
