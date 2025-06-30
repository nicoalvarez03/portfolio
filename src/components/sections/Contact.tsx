import { Reveal } from "../common/Reveal";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { ButtonPrimary } from "../common/buttons/ButtonPrimary";

export default function Contact() {
  const [state, handleSubmit] = useForm("mpwrbzwn");
  if (state.succeeded) {
    return (
      <motion.p
        className="text-green-400 mt-2 text-center"
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
            onSubmit={handleSubmit}
            method="POST"
            className="w-full sm:w-lg md:w-xl lg:w-2xl mx-auto flex flex-col gap-4 bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
              className="bg-gray-800 p-3 rounded text-white outline-none"
            />
            <ValidationError
              field="name"
              prefix="Name"
              className="text-red-500 mt-2"
              errors={state.errors}
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              className="bg-gray-800 p-3 rounded text-white outline-none"
            />
            <ValidationError
              field="email"
              prefix="Email"
              className="text-red-500 mt-2"
              errors={state.errors}
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              rows={5}
              className="bg-gray-800 p-3 rounded text-white outline-none"
            />
            <ValidationError
              field="message"
              prefix="Message"
              className="text-red-500 mt-2"
              errors={state.errors}
            />
            <ButtonPrimary type="submit">Enviar</ButtonPrimary>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
