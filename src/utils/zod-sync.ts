import { RuleRender } from "antd/es/form";
import { ZodEffects, ZodObject, ZodRawShape } from "zod";

export type AntdFormZodSchema<T extends ZodRawShape> =
  | ZodObject<T>
  | ZodEffects<ZodObject<T>>;

export const createZodSync =
  <T extends ZodRawShape>(schema: AntdFormZodSchema<T>): RuleRender =>
    ({ getFieldsValue }) => ({
      /* eslint-disable no-async-promise-executor */
      validator: (rule) =>
        new Promise(async (resolve, reject) => {
          const { field } = rule as { field: string };

          const values = getFieldsValue();
          const data = await schema.safeParseAsync(values);

          if (!data.success) {
            const error = data.error.issues.find(
              (err) => err.path.join(".") === field,
            );
            if (error) reject(error);
          }

          resolve(undefined);
        }),
    });
