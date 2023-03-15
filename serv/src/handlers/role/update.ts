import { NextFunction, Request, Response } from "express";
import { Role } from "../../models/role";

type UpdateRoleDto = {
  name?: string;
  description?: string;
};

async function updateRole(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { id } = req.params;
  const { name, description }: UpdateRoleDto = req.body;

  try {
    const role = await Role.findByIdAndUpdate(
      id,
      {
        name,
        description,
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
