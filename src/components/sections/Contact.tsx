import { Reveal } from "../common/Reveal";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { ButtonPrimary } from "../common/buttons/ButtonPrimary";
import {useState} from "react";

export default function Contact() {
  const [state, formspreeSubmit] = useForm("mpwrbzwn"); // Reemplaza con tu ID de Formspree
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Manejo de errores de validación
  const validate = (formData: {name: string, email: string, message: string}) => {
    const newErrors = {name: "", email: "", message: ""};
    let isValid = true;

    if(!formData.name.trim()){
      newErrors.name = "El nombre es obligatorio.";
      isValid = false;
    }

    if(!formData.email.trim()){
      newErrors.email = "El email es obligatorio.";
      isValid = false;
    }else if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)){
      newErrors.email = "El email no es válido.";
      isValid = false;
    }

    if(!formData.message.trim()){
      newErrors.message = "El mensaje es obligatorio.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  const handleLocalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name: (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value, // Acceso al input de nombre
      email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value, // Acceso al input de email
      message: (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement).value, // Acceso al textarea de mensaje
    }

    if(validate(formData)) {
      formspreeSubmit(e);
    }
  }

  // Manejo del envío del formulario
  if (state.succeeded) {
    return (
      <motion.p
        className="text-green-400 mt-2 text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mensaje enviado ✅
      </motion.p>
    );
  }

  return (
    <section id="contacto" className="text-white w-full px-4 mb-30">
      <div className="w-full flex flex-col items-center justify-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-8">Contáctame</h2>
        </Reveal>
        <Reveal>
          <form
            onSubmit={handleLocalSubmit}
            method="POST"
            className="w-full sm:w-lg md:w-xl lg:w-2xl mx-auto flex flex-col gap-4 bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              className="bg-gray-800 p-3 rounded text-white outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Tu email"
              className="bg-gray-800 p-3 rounded text-white outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <textarea
              name="message"
              placeholder="Tu mensaje"
              rows={5}
              className="bg-gray-800 p-3 rounded text-white outline-none"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <ButtonPrimary type="submit">Enviar</ButtonPrimary>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
