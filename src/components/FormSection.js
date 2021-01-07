import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import MaskedInput from "react-text-mask";
import api from '../service/api'
import { FaSpinner } from "react-icons/fa";

export const MASK_CEL = [
  "(",
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];
export const MASK_CEL_9 = [
  "(",
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const formatPhone = (phone) => {
  if (!phone) {
    return MASK_CEL;
  }

  let numbers = phone.replace(/\s|-|_|\.|\(|\)/g, "");
  let numberLength = 0;
  if (numbers) {
    numberLength = numbers.length;
  }

  return numberLength > 10 ? MASK_CEL_9 : MASK_CEL;
};

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  type: ""
};

const validationSchema = yup.object().shape({
  name: yup.string().required("Informe o seu nome"),
  type: yup.string().required("Selecione um produto"),
  email: yup.string().email("Informe um e-mail válido").required("Informe o seu e-mail"),
  phone: yup
    .string()
    .test("validPhone", "Informe um telefone válido", (value) => {
      if (!value) return;
      let digits = value.replace(/\D*/g, "");
      return digits.length === 10 || digits.length === 11;
    })
    .required("Informe o seu telefone"),
  message: yup.string().required("Descreva um pouco mais o que precisa"),
});

export default function FormSection({ registerEvent }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [haveErrorSend, setHaveErrorSend] = useState(false);

  const sendForm = async (values, { setSubmitting, resetForm }) => {
    setHaveErrorSend(false);
    setIsSuccess(false);

    try {
      const { data } = await api.post("/email", values);
      if (data.status === "success") {
        if(registerEvent) registerEvent("enviar", "orcamento");
        resetForm(initialValues);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 15000);
      } else {
        setHaveErrorSend(true);
      }
    } catch (error) {
      console.error(error)
      setHaveErrorSend(true);
    }
  };

  return (
    <section className="contact py-4 py-lg-5 bg-darkgray" id="pedir-orcamento">
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center mx-auto mb-3">
            <h2 className="display-4 text-white font-title">Pedir um orçamento</h2>
            <p className="lead mt-2 text-white px-lg-5">
              Quer conhecer melhor nossos uniformes ou agendar uma visita? Nos envie uma mensagem com seu dados e será um prazer te ajudar com seu novo uniforme!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-card-form mx-auto">
            <div className="card shadow-lg border-0 my-3">
              <div className="card-body px-3 py-4 py-lg-5 px-lg-5">
                <p className="text-dark text-center">
                  Envie uma mensagem com seus dados e nós retornaremos para você em até um dia útil.
                  Será um prazer te ajudar com seu novo uniforme.
                </p>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={sendForm}
                >
                  {({ isSubmitting, errors, submitCount }) => (
                    <Form className="text-left">
                        <div className="form-group ">
                        <label htmlFor="name">Nome completo*</label>
                        <Field
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Seu nome"
                          disabled={isSubmitting}
                        />
                        <ErrorMessage name="name" component="small" className="text-danger" />
                      </div>
                      <div className="form-group ">
                        <label htmlFor="phone">Celular ou Telefone<sup className="text-danger">*</sup></label>
                        <Field
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          mask={formatPhone}
                          as={MaskedInput}
                          disabled={isSubmitting}
                          placeholder="Ex.: (99) 99999-9999"
                        />
                        <ErrorMessage name="phone" component="small" className="text-danger" />
                      </div>
                        <div className="form-group ">
                        <label htmlFor="email">E-mail<sup className="text-danger">*</sup></label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          disabled={isSubmitting}
                          placeholder="Ex.: nome@dominio.com.br"
                        />
                        <ErrorMessage name="email" component="small" className="text-danger" />
                      </div>
                      <div className="form-group ">
                        <label htmlFor="type">Produto<sup className="text-danger">*</sup></label>
                        <Field
                          name="type"
                          as="select"
                          id="type"
                          className="form-control"
                          disabled={isSubmitting}
                        >
                          <option value="">Selecione um produto</option>
                          <option value="Linha MedUniforme">Linha MedUniforme</option>
                          <option value="Linha Serviço">Linha Serviço</option>
                          <option value="Linha Evento">Linha Evento</option>
                          <option value="Linha Promocional">Linha Promocional</option>
                        </Field>
                        <ErrorMessage name="type" component="small" className="text-danger" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Mensagem<sup className="text-danger">*</sup></label>
                        <Field
                          name="message"
                          as="textarea"
                          id="message"
                          className="form-control"
                          placeholder="Ex: Preciso de uniformes com estampas... "
                          disabled={isSubmitting}
                        />
                        <ErrorMessage name="message" component="small" className="text-danger" />
                      </div>

                      <div className="d-flex flex-column align-items-center">
                        {isSuccess && (
                          <div className="alert alert-success text-center">
                            Obrigado pelo seu contato, retornaremos o mais breve possível!
                          </div>
                        )}
                        {haveErrorSend && (
                          <div className="text-danger text-center">
                            Ocorreu um erro ao enviar os seus dados, por favor tente novamente mais
                            tarde.
                          </div>
                        )}
                        {errors && Object.keys(errors).length > 0 && submitCount > 0 && (
                          <div className="text-danger text-center">
                            Por favor, preencha os campos corretamente
                          </div>
                        )}

                        <button
                          disabled={isSubmitting}
                          type="submit"
                          className="mt-2 px-2 d-block w-100 text-uppercase py-3 btn btn-success text-white font-weight-bold mx-auto"
                        >
                          {isSubmitting ? (
                            <>
                              <FaSpinner size={20} className="mr-2 rotate" />
                              Enviando...
                            </>
                          ) : (
                            "Enviar pedido de orçamento"
                          )}
                        </button>
                        <small>Retornamos em até 1 dia útil</small>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
