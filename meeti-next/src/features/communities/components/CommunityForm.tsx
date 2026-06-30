import {
  FormErrors,
  FormInput,
  FormLabel,
  FormTextArea,
} from "@/src/shared/components/forms";
import { useFormContext, UseFormRegister } from "react-hook-form";
import { CommunityInput } from "../schemas/communitySchema";

type Props = {
  register:UseFormRegister<CommunityInput>
} // Se podria hacer esto para no usar el context del form. Se haria el prop drilling

export default function CommunityForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CommunityInput>();

  return (
    <>
      <FormLabel htmlFor="name">Nombre Comunidad</FormLabel>
      <FormInput
        id="name"
        type="text"
        placeholder="Titulo Comunidad"
        {...register("name")}
      />
      {errors.name && <FormErrors>{errors.name.message}</FormErrors>}

      <FormLabel htmlFor="description">Descripción Comunidad</FormLabel>
      <FormTextArea
        id="description"
        placeholder="Descripción Comunidad"
        {...register("description")}
      />

      {errors.description && (
        <FormErrors>{errors.description.message}</FormErrors>
      )}
    </>
  );
}
