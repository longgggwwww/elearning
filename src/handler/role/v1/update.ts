import { NextFunction, Request, Response } from "express";
import { Types } from "mongoose";
import { Role } from "../../../model/role";

type UpdateRoleDto = {
  name?: string;
  description?: string;
  permissionIds?: Types.ObjectId[];
};

async function updateRole(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { id } = req.params;
  const {
    name,
    description,
    permissionIds,
  }: UpdateRoleDto = req.body;

  try {
    const role = await Role.findByIdAndUpdate(
      id,
      {
        name,
        description,
        permissions: permissionIds,
      },
      { new: true }
    );

    res.json({
      role,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

export { updateRole };
