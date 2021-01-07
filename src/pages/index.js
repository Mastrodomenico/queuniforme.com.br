import React, { useState, useEffect } from "react";
import Head from "next/head";
import { FaWhatsapp, FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";

import lazyload from "../lazyload";
import FormSection from "../components/FormSection";
import registerEvent from "../utils/registerEvents";
import SmoothScroll from "../components/SmoothScroll";





function ImageWebp({ src, ...props }) {
  const ext = src.split('.').pop();
  const path = src.replace(ext, '')

  return (
    <picture>
      <source type="image/webp" srcSet={`${path}webp`} />
      <source type="image/jpeg" srcSet={`${path}${ext}`} />
      <img src={`${path}${ext}`} {...props} />
    </picture>
  );
}

const Cta = ({ className, children, url, style = "button", ...props }) => {
  return (
    <a
      href={url}
      title="Pedir Orçamento"
      {...props}
      className={`${
        style === "button" &&
        "font-weight-bold btn btn-cta btn-success text-uppercase text-white align-items-center py-2 px-4 shadow-sm"
      } ${className}`}
    >
      <span className="my-2 d-flex align-items-center justify-content-center">{children}</span>
    </a>
  );
};

export default function Index({ showAlert = false }) {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0"
        />
        <meta name="theme-color" content="#222" />

        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon.png" />
        <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
        <link rel="canonical" href="https://www.queuniforme.com.br/" />
        <meta
          name="description"
          content="A QueUniforme é o Melhor Custo-Benefício em Confecção de Uniformes Profissionais Personalizados para Empresas, Serviços, Eventos e Promoção."
        />
        <meta name="keywords" content="uniformes profissionais, uniformes personalizados, uniformes empresariais, confecção de uniformes, uniformes para empresas" />
        <meta property="og:url" content="https://queuniforme.com.br/" />
        <meta property="og:title" content="QueUniforme!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/screenshot.png" />
        <meta
          property="og:description"
          content="A QueUniforme é o Melhor Custo-Benefício em Confecção de Uniformes Profissionais Personalizados para Empresas, Serviços, Eventos e Promoção."
        />
        <meta property="og:locale" content="pt_BR" />
        <title>
          Confecção de Uniformes Profissionais Personalizados | QueUniforme
        </title>
      </Head>

      <div className="overlay">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-lightblack js-main-menu">
          <div className="container">
            <a className="navbar-brand  mx-auto mr-lg-4" href="/" title="Ir para o início">
              <img
                src="/assets/images/que-uniforme.svg"
                alt="QueUniforme!"
                title="QueUniforme!"
                height="25"
                loading="lazy"
              />
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link smooth" href="#home" title="Ir para o Início">
                    Início
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth" href="#sobre" title="Sobre a QueUniforme!">
                    Sobre-nós
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth" href="#produtos" title="Produtos">
                    Produtos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth" href="#servicos" title="Serviços">
                    Serviços
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="//medium.com/@queuniforme"
                    target="_blank"
                    rel="noopener"
                    title="Ir para o Blog"
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item nav--featured">
                  <Cta
                    className=" font-weight-bold btn btn-cta btn-success text-uppercase text-white align-items-center py-0 px-4 shadow-sm"
                    style="link"
                    href="#pedir-orcamento"
                    title="Pedir Orçamento para a QueUniforme"
                    onClick={() => registerEvent("clique", "orcamento")}
                  >
                    Pedir Orçamento
                  </Cta>
                </li>
                <li className="nav-item nav--featured nav--outline ml-lg-2">
                  <a
                    className="btn d-flex justify-content-center align-items-center btn-block btn-outline-light font-weight-bold py-2 px-3"
                    href="https://api.whatsapp.com/send?phone=5517988264900&text=Olá+QueUniforme,+quero+pedir+um+orçamento"
                    rel="noopener"
                    title="Ligar para a QueUniforme"
                    onClick={() => registerEvent("clique", "whatsapp")}
                  >
                    <FaWhatsapp size="25" className="mr-2" /> (17) 98826-4900
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-md-3">
              <h1 className="h2">
                <strong>Que Uniforme!</strong>É isso que você vai dizer, quando usar os nossos
                uniformes
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-5 col-lg-4 mb-lg-3 mx-auto">
              <div className="d-flex flex-column">
                <Cta
                  className="mt-3 mb-2 btn-lg "
                  href="#pedir-orcamento"
                  title="Pedir Orçamento para a QueUniforme"
                  onClick={() => registerEvent("clique", "orcamento")}
                >
                  Pedir Orçamento
                </Cta>
                <span className="or-divider d-block my-1">ou</span>
                <div>
                  <small>ligar ou chamar pelo WhatsApp</small>
                  <a
                    className="btn btn-lg d-flex justify-content-center align-items-center btn-block btn-outline-light font-weight-bold py-3"
                    href="https://api.whatsapp.com/send?phone=5517988264900&text=Olá+QueUniforme,+quero+pedir+um+orçamento"
                    rel="noopener"
                    title="Ligar para a QueUniforme"
                    onClick={() => registerEvent("clique", "whatsapp")}
                  >
                    <FaWhatsapp size="25" className="mr-2" /> (17) 98826-4900
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 offset-md-3">
              <ul className="social-links">
                <li className="social__item">
                  <a
                    className="social__item__link social-icon facebook"
                    href="//www.facebook.com/queuniforme/"
                    target="_blank"
                    title="Seguir a QueUniforme! no Facebook"
                  >
                    /queuniforme
                  </a>
                </li>
                <li className="social__item">
                  <a
                    className="social__item__link social-icon instagram"
                    href="//www.instagram.com/queuniforme/"
                    target="_blank"
                    title="Seguir a QueUniforme! no Instagram"
                  >
                    @queuniforme
                  </a>
                </li>
                <li className="social__item">
                  <a
                    className="social__item__link social-icon pinterest"
                    href="//br.pinterest.com/queuniforme/"
                    target="_blank"
                    title="Seguir a QueUniforme! no Pinterest"
                  >
                    QueUniforme!
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </div>

      <section className="fixed-top p-2 bg-darkgray shadow d-lg-none" style={{ zIndex: 10 }}>
        <Cta className="d-block " href="#pedir-orcamento" title="Pedir Orçamento para a QueUniforme" onClick={() => registerEvent('clique', 'orcamento')}>
          Pedir Orçamento
        </Cta>
      </section>
      

      <section className="about" id="sobre">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <h3 className="h2 mb-0">Prazer, somos a QueUniforme!</h3>
              <h2 className="h4 mb-3 text-uppercase text-secondary">confecção de uniformes</h2>
              <p className="about__text">
                Em 2016 Daniele Serafim começou a construir a história da QueUniforme! ajudando
                pessoas a encontrar o melhor uniforme com preço justo.
                <br />A QueUniforme! é o resultado de muita dedicação e paixão em ajudar pessoas e
                empresas a encontrar e escolherem o melhor uniforme. Desde empresas até instituições
                religiosas, buscamos criar o uniforme ideal, proporcionando qualidade, conforto e
                elegância.
              </p>
            </div>
            <div className="col-12 col-lg-4 about__item">
              <ImageWebp
                src="/assets/images/atendimento@2x.png"
                alt="Atendimento QueUniforme!"
                className="about__icon"
                loading="lazy"
              />
              <h3 className="about__item__title">Vamos até você</h3>
              <p className="about__item__text">
                Ajudamos na escolha do melhor uniforme, criando o modelo ideal para a sua empresa,
                ou evento, trazendo sempre elegância e conforto.
              </p>
            </div>
            <div className="col-12 col-lg-4 about__item">
              <ImageWebp
                src="/assets/images/qualidade@2x.png"
                alt="Qualidade QueUniforme!"
                className="about__icon"
                loading="lazy"
              />
              <h3 className="about__item__title">Compromisso com a qualidade</h3>
              <p className="about__item__text">
                Para produzir uniformes de alta qualidade, buscamos fornecedores que também se
                dedicam em trazer o melhor material para o seu uniforme.
              </p>
            </div>
            <div className="col-12 col-lg-4 about__item">
              <ImageWebp
                src="/assets/images/entrega@2x.png"
                alt="Entrega QueUniforme!"
                className="about__icon"
                loading="lazy"
              />
              <h3 className="about__item__title">Entrega garantida</h3>
              <p className="about__item__text">
                Acompanhamos de perto o seu pedido em todo o processo de confecção, para garantir a
                entrega do seu uniforme no dia do seu evento ou na inauguração da sua empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="product text-white bg-darkgray" id="produtos">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-md-3">
              <h2 className="h2">Nossos produtos</h2>
              <p>
                São desenvolvidos com máquinas de ponta, mão-de-obra especializada, experiência no
                ramo e muito amor!
              </p>
            </div>
          </div>
          <div className="row align-items-center align-items-lg-stretch justify-content-center">
            <div className="col-12 col-lg-4 my-3">
              <div className="product__item bg-white h-100 shadow rounded">
              <div >
                    <ImageWebp
                      src="/assets/images/linhaServiço.jpg"
                      alt="Uniforme Linha Serviço - QueUniforme!"
                      title="Uniforme Linha Serviço - QueUniforme!"
                      className="img-fluid"
                    />
              <div>
                    
                  </div>
                  </div>
                {/* <Slider
                  {...{ dots: true, infinite: true, arrows: false, lazyLoad: true }}
                  className="product__item__gallery">
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto5.jpg"
                      alt="Uniforme Linha Serviço - QueUniforme!"
                      title="Uniforme Linha Serviço - QueUniforme!"
                    />
                  </div>
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto6.jpg"
                      alt="Uniforme Linha Serviço - QueUniforme!"
                      title="Uniforme Linha Serviço - QueUniforme!"
                    />
                  </div>
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto7.jpg"
                      alt="Uniforme Linha Serviço - QueUniforme!"
                      title="Uniforme Linha Serviço - QueUniforme!"
                    />
                  </div>
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto8.jpg"
                      alt="Uniforme Linha Serviço - QueUniforme!"
                      title="Uniforme Linha Serviço - QueUniforme!"
                    />
                  </div>
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto9.jpg"
                      alt="Uniforme Linha Serviço - QueUniforme!"
                      title="Uniforme Linha Serviço - QueUniforme!"
                    />
                  </div>
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto10.jpg"
                      alt="Uniforme Linha Serviço - QueUniforme!"
                      title="Uniforme Linha Serviço - QueUniforme!"
                    />
                  </div>
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto11.jpg"
                      alt="Uniforme Linha Serviço - QueUniforme!"
                      title="Uniforme Linha Serviço - QueUniforme!"
                    />
                  </div>
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto17.jpg"
                      alt="Uniforme Linha Serviço - QueUniforme!"
                      title="Uniforme Linha Serviço - QueUniforme!"
                    />
                  </div>
                </Slider> */}
                <div className="px-3 pb-4 pt-3 px-lg-4 pb-lg-4 pt-lg-4 text-center" style={{marginTop: "10.5rem"}}>
                  <h3 className="product__item__title text-danger mb-4">Linha Serviço</h3>
                  <p className="product__item__description text-body m-0">
                    Uniformes utilizados diariamente em escritórios, serviços gerais, restaurantes,
                    escolas, hotéis, entre outros.
                  </p>
                </div>
              </div>
            </div>

{/*             <div className="col-12 col-lg-4 my-3">
              <div className="product__item bg-white h-100 shadow rounded">
                <Slider
                  {...{ dots: true, infinite: true, arrows: false, lazyLoad: true }}
                  className="product__item__gallery"
                >
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto2.jpg"
                      alt="Uniforme Linha Evento - QueUniforme!"
                      title="Uniforme Linha Evento - QueUniforme!"
                    />
                  </div>
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto-queuniforme.jpg"
                      alt="Uniforme Linha Evento - QueUniforme!"
                      title="Uniforme Linha Evento - QueUniforme!"
                    />
                  </div>
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto3.jpg"
                      alt="Uniforme Linha Evento - QueUniforme!"
                      title="Uniforme Linha Evento - QueUniforme!"
                    />
                  </div>
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto4.jpg"
                      alt="Uniforme Linha Evento - QueUniforme!"
                      title="Uniforme Linha Evento - QueUniforme!"
                    />
                  </div>
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto12.jpg"
                      alt="Uniforme Linha Evento - QueUniforme!"
                      title="Uniforme Linha Evento - QueUniforme!"
                    />
                  </div>
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto13.jpg"
                      alt="Uniforme Linha Evento - QueUniforme!"
                      title="Uniforme Linha Evento - QueUniforme!"
                    />
                  </div>
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto14.jpg"
                      alt="Uniforme Linha Evento - QueUniforme!"
                      title="Uniforme Linha Evento - QueUniforme!"
                    />
                  </div>
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto18.jpg"
                      alt="Uniforme Linha Evento - QueUniforme!"
                      title="Uniforme Linha Evento - QueUniforme!"
                    />
                  </div>
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto19.jpg"
                      alt="Uniforme Linha Evento - QueUniforme!"
                      title="Uniforme Linha Evento - QueUniforme!"
                    />
                  </div>
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto20.jpg"
                      alt="Uniforme Linha Evento - QueUniforme!"
                      title="Uniforme Linha Evento - QueUniforme!"
                    />
                  </div>
                </Slider>
                <div className="px-3 pb-4 pt-3 px-lg-4 pb-lg-4 pt-lg-4 text-center">
                  <div className="h3 product__item__title text-danger mb-4">Linha Evento</div>
                  <p className="product__item__description text-body m-0">
                    Para congressos, festividades e homenagens temos gravatas estampadas, camiseta
                    camuflada, blusa com viscolycra e pedraria, echarpes estampadas. Todos
                    personalizados com a identidade do seu evento.
                  </p>
                </div>
              </div>
            </div> */}

            <div className="col-12 col-lg-4 my-3">
              <div className="product__item bg-white h-100 shadow rounded">
                <Slider
                  {...{ dots: true, infinite: true, arrows: false, lazyLoad: true }}
                  className="product__item__gallery"
                >
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto15.jpg"
                      alt="Uniforme Linha Promocional - QueUniforme!"
                      title="Uniforme Linha Promocional - QueUniforme!"
                    />
                  </div>
                  <div>
                    <ImageWebp
                      src="/assets/images/produtos/produto16.jpg"
                      alt="Uniforme Linha Promocional - QueUniforme!"
                      title="Uniforme Linha Promocional - QueUniforme!"
                    />
                  </div>
                </Slider>
                <div className="px-3 pb-4 pt-3 px-lg-4 pb-lg-4 pt-lg-4 text-center">
                  <div className="h3 product__item__title text-danger mb-4">Linha Promocional</div>
                  <p className="product__item__description text-body m-0">
                    Uniformes usados em ações pontuais, como homenagens, campanhas sazonais e
                    outros.
                  </p>
                </div>
              </div>
            </div>
          

            <div className="col-12 col-lg-4 my-3">
              <div className="product__item bg-white h-100 shadow rounded">
                <div className="product__item__gallery">
                  <div>
                    <ImageWebp
                      src="/assets/images/pijama-cirurgico.jpg"
                      alt="Linha MedUniforme"
                      title="Linha MedUniforme"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="px-3 pb-4 pt-3 px-lg-4 pb-lg-4 pt-lg-4 text-center">
                  <div className="h3 product__item__title text-danger mb-4">Linha MedUniforme</div>
                  <p className="product__item__description text-body m-0">
                    Pijamas cirúrgicos, campos cirúrgicos, jalecos médicos, jalecos descartáveis e todos os uniformes indicados para profissionais da saúde dentro e fora dos centros cirúrgicos.
                  </p>
                </div>
              </div>
            </div>
          
            <div className="col-12 col-lg-4 my-3">
              <a
                href="#pedir-orcamento"
                title="Fazer orçamento personalizado"
                className="smooth card card-cta py-lg-5 py-4 border-0 shadow rounded bg-white text-dark h-100 cta"
                onClick={() => registerEvent('clique', 'orcamento')}
              >
                <div className="card-body py-lg-5 p-4 d-flex flex-column text-lg-left">
                  <h4 className="card-title font-title mb-5 font-weight-bold">Faça seu orçamento <span className="text-danger">personalizado</span></h4>
                  <p className="card-text">
                    Não encontrou o produto que precisava? Entre em contato conosco e solicite um
                    orçamento. Ficaremos felizes em atender suas necessidades.
                  </p>
                  <small className="shadow text-white text-uppercase font-weight-bold p-3 rounded bg-success mt-4 mt-lg-auto text-center">
                    Peça seu orçamento <FaLongArrowAltRight size={20} className="ml-2" />
                  </small>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{backgroundPosition: 'cover', backgroundImage: 'url(/assets/images/banner-meduniforme.jpg)'}}>
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-lg-8 mx-auto text-white text-center">
              <div className="display-3 font-title">Conheça a nova Linha MedUniforme</div>
              <div className="lead">Confecção exclusiva de uniformes médicos, hospitalares e de produtos para campo cirúrgico visando sempre uma entrega de máxima qualidade para profissionais da saúde.</div>
              <Cta
                  className="mt-3 mb-2 px-3 btn btn-lg btn-lg text-uppercase text-info font-weight-bold text-wrap"
                  style="link"
                  href="https://meduniforme.com.br/?utm_source=queuniforme&utm_medium=trafego"
                  target="_blank"
                  rel="noopener"
                  title="Conhecer a Linha MedUniforme"
                  onClick={() => registerEvent("ver", "meduniforme")}
                >
                  Conhecer a Linha MedUniforme
                  <FaLongArrowAltRight size={25} className="ml-3" />
                </Cta>
            </div>
          </div>
        </div>
      </section>

      <section className="service" id="servicos">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="h2 service__title">Esqueça os problemas com uniformes</h2>
              <p className="service__subtitle">
                Queremos que você receba o uniforme pronto pra usar, e por isso não trabalhamos só
                com uniformes.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4 service__item">
              <ImageWebp
                src="/assets/images/consultoria.png"
                alt="Consultoria em moda QueUniforme!"
                className="service__item__icon"
              />
              <h3 className="service__item__title">Consultoria em moda</h3>
              <p className="service__item__description">
                Sempre criamos o layout junto com o cliente, entendendo o que precisa e buscando
                novas tendências e inspirações, através de assessoria técnica, consultoria em moda,
                e também contamos com estilistas e modelista profissionais.
              </p>
            </div>
            <div className="col-12 col-lg-4 service__item">
              <ImageWebp
                src="/assets/images/materia-prima.png"
                alt="Matéria-prima QueUniforme!"
                className="service__item__icon"
              />
              <h3 className="service__item__title">Matéria-prima</h3>
              <p className="service__item__description">
                Nós mantemos uma rede de dedicados fornecedores, tantos nacionais quanto importados,
                e mantemos o contato durante todo o processo, para que você não se preocupe com
                isso.
              </p>
            </div>
            <div className="col-12 col-lg-4 service__item">
              <ImageWebp
                src="/assets/images/criacao.png"
                alt="Criação e aplicação QueUniforme!"
                className="service__item__icon"
              />
              <h3 className="service__item__title">Criação e aplicação</h3>
              <p className="service__item__description">
                Seja silk, bordados, sublimação ou digitalização, atuamos desde de os desenhos e
                logos, até a aplicação no tecido. Para isso utilizamos máquinas computadorizadas de
                alta qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="client">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 offset-md-2">
              <h2 className="h2">Nossos clientes</h2>
              <h3 className="client__subtitle">
                Conheça alguns dos clientes que estão usando QueUniforme!
              </h3>
            </div>
          </div>
        </div>
        <ul className="client__list list-unstyled d-flex flex-wrap justify-content-center align-items-center aling-content-center">
          <li className="client__list__item" title="Zappa`s Pães e Tentações">
            <ImageWebp src="/assets/images/2019/07/logo-zappas.png" alt="Zappa`s Pães e Tentações" />
          </li>
          <li className="client__list__item" title="Supermercados Porecatu">
            <ImageWebp src="/assets/images/2019/07/logo-porecatu.png" alt="Supermercados Porecatu" />
          </li>
          <li className="client__list__item" title="Igreja Evangélica Assembleia de Deus">
            <ImageWebp
              src="/assets/images/2019/07/logo-adrp.png"
              alt="Igreja Evangélica Assembleia de Deus"
            />
          </li>
          <li className="client__list__item" title="Comdominus">
            <ImageWebp src="/assets/images/2019/07/logo-condominus.png" alt="Comdominus" />
          </li>
          <li className="client__list__item" title="Consulta Mais - Consulta e Exames">
            <ImageWebp
              src="/assets/images/2019/07/consulta-mais.png"
              alt="Consulta Mais - Consulta e Exames"
            />
          </li>
          <li className="client__list__item" title="Residencial Gaivota">
            <ImageWebp
              src="/assets/images/2019/07/logo-residencial-gaivota.png"
              alt="Residencial Gaivota"
            />
          </li>
          <li className="client__list__item" title="Parque da Liberdade - Morada">
            <ImageWebp
              src="/assets/images/2019/07/parque-da-liberdade.png"
              alt="Parque da Liberdade - Morada"
            />
          </li>
          <li className="client__list__item" title="Pclick - Profisisonais em 1 click">
            <ImageWebp src="/assets/images/2019/07/pclick.png" alt="Pclick - Profisisonais em 1 click" />
          </li>
          <li className="client__list__item" title="Damha 4 - Parque Residencial">
            <ImageWebp
              src="/assets/images/2019/07/damha-iv-parque-residencial.png"
              alt="Damha 4 - Parque Residencial"
            />
          </li>
          <li className="client__list__item" title="Residencial Damha Village 3">
            <ImageWebp
              src="/assets/images/2019/07/Village-damha-III.png"
              alt="Residencial Damha Village 3"
            />
          </li>
          <li className="client__list__item" title="A Regional Instrumentos Musicais">
            <ImageWebp src="/assets/images/2019/07/regional.png" alt="A Regional Instrumentos Musicais" />
          </li>
          <li className="client__list__item" title="União das Faculdades dos Grandes Lagos">
            <ImageWebp
              src="/assets/images/2019/07/unilago.png"
              alt="União das Faculdades dos Grandes Lagos"
            />
          </li>
          <li className="client__list__item" title="Magazine Luiza">
            <ImageWebp src="/assets/images/2019/07/Magazine-Luiza.png" alt="Magazine Luiza" />
          </li>
          <li className="client__list__item" title="Aviva Conforto">
            <ImageWebp src="/assets/images/2019/07/logoaviva.png" alt="Aviva Conforto" />
          </li>
          <li className="client__list__item" title="Grupo Mizu Ambiental">
            <ImageWebp src="/assets/images/2019/07/grupo-mizu-ambiental.png" alt="Grupo Mizu Ambiental" />
          </li>
          <li className="client__list__item" title="Junior Correa Projetos e Construções">
            <ImageWebp
              src="/assets/images/2019/07/LOGO-JR-CORREA.png"
              alt="Junior Correa Projetos e Construções"
            />
          </li>
          <li className="client__list__item" title="De La Garza Merchandising">
            <ImageWebp
              src="/assets/images/2019/07/de-la-garza-merchandising.png"
              alt="De La Garza Merchandising"
            />
          </li>
          <li className="client__list__item" title="Cobmas Sales Center">
            <ImageWebp src="/assets/images/2019/07/Cobmax.png" alt="Cobmas Sales Center" />
          </li>
          <li className="client__list__item" title="Acalanto">
            <ImageWebp src="/assets/images/2019/07/Acalanto.png" alt="Acalanto" />
          </li>
          <li className="client__list__item" title="CCAA">
            <ImageWebp src="/assets/images/2019/07/CCAA.png" alt="CCAA" />
          </li>
          <li className="client__list__item" title="Fazenda Castelo de Santa Maria">
            <ImageWebp
              src="/assets/images/2019/07/fazenda-castelo-da-santa-maria.png"
              alt="Fazenda Castelo de Santa Maria"
            />
          </li>
          <li className="client__list__item" title="Massas Valaretto">
            <ImageWebp src="/assets/images/2019/07/massa-valeretto.png" alt="Massas Valaretto" />
          </li>
        </ul>
      </section>

     {/*  <section className="product" id="produtos-entregues">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-md-3">
              <h2 className="h2 mb-3">Últimos uniformes entregues</h2>
            </div>
          </div>
          <div className="row align-items-center align-items-lg-stretch justify-content-center">
            <div className="col-12 col-lg-4">
              <div className="product__item bg-white h-100 shadow rounded">
              <Slider
                {...{ dots: true, infinite: true, arrows: false, lazyLoad: true }}
                className="product__item__gallery"
              >
                <div>
                  <ImageWebp
                    src="/assets/images/2019/01/queuniforme-damha-iv-1@2x.jpg"
                    alt="Damha IV"
                    title="Damha IV"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <ImageWebp
                    src="/assets/images/2019/01/queuniforme-damha-iv-2@2x.jpg"
                    alt="Damha IV"
                    title="Damha IV"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <ImageWebp
                    src="/assets/images/2019/01/queuniforme-damha-iv-3@2x.jpg"
                    alt="Damha IV"
                    title="Damha IV"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <ImageWebp
                    src="/assets/images/2019/01/queuniforme-damha-iv-4@2x.jpg"
                    alt="Damha IV"
                    title="Damha IV"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <ImageWebp
                    src="/assets/images/2019/01/queuniforme-damha-iv-5@2x.jpg"
                    alt="Damha IV"
                    title="Damha IV"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <ImageWebp
                    src="/assets/images/2019/01/queuniforme-damha-iv-6@2x.jpg"
                    alt="Damha IV"
                    title="Damha IV"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <ImageWebp
                    src="/assets/images/2019/01/queuniforme-damha-iv-7@2x.jpg"
                    alt="Damha IV"
                    title="Damha IV"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <ImageWebp
                    src="/assets/images/2019/01/queuniforme-damha-iv-8@2x.jpg"
                    alt="Damha IV"
                    title="Damha IV"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <ImageWebp
                    src="/assets/images/2019/01/queuniforme-damha-iv-9@2x.jpg"
                    alt="Damha IV"
                    title="Damha IV"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <ImageWebp
                    src="/assets/images/2019/01/queuniforme-damha-iv@2x.jpg"
                    alt="Damha IV"
                    title="Damha IV"
                    className="img-fluid"
                  />
                </div>
              </Slider>
              <div className="px-3 pb-4 pt-3 px-lg-4 pb-lg-4 pt-lg-4 text-center">
                <div className="h3 product__item__title text-danger mb-4">Damha IV</div>
              </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="product__item bg-white h-100 shadow rounded">
              <Slider
                {...{ dots: true, infinite: true, arrows: false, lazyLoad: true }}
                className="product__item__gallery"
              >
                <div>
                  <ImageWebp
                    src="/assets/images/2019/01/queuniforme-grupo-natura-life-1@2x.jpg"
                    alt="Grupo Natura Life"
                    title="Grupo Natura Life"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <ImageWebp
                    src="/assets/images/2019/01/queuniforme-grupo-natura-life-2@2x.jpg"
                    alt="Grupo Natura Life"
                    title="Grupo Natura Life"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <ImageWebp
                    src="/assets/images/2019/01/queuniforme-grupo-natura-life-3@2x.jpg"
                    alt="Grupo Natura Life"
                    title="Grupo Natura Life"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <ImageWebp
                    src="/assets/images/2019/01/queuniforme-grupo-natura-life-4@2x.jpg"
                    alt="Grupo Natura Life"
                    title="Grupo Natura Life"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <ImageWebp
                    src="/assets/images/2019/01/queuniforme-grupo-natura-life-5@2x.jpg"
                    alt="Grupo Natura Life"
                    title="Grupo Natura Life"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <ImageWebp
                    src="/assets/images/2019/01/queuniforme-grupo-natura-life@2x.jpg"
                    alt="Grupo Natura Life"
                    title="Grupo Natura Life"
                    className="img-fluid"
                  />
                </div>
              </Slider>
              <div className="px-3 pb-4 pt-3 px-lg-4 pb-lg-4 pt-lg-4 text-center">
                <div className="h3 product__item__title text-danger mb-4">Grupo Natura Life</div>
              </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="product__item bg-white h-100 shadow rounded">
              <Slider
                {...{ dots: true, infinite: true, arrows: false, lazyLoad: true }}
                className="product__item__gallery"
              >
                <div>
                  <ImageWebp
                    src="/assets/images/2019/01/queuniforme-magazine-luiza-1@2x.jpg"
                    alt="Magazine Luiza"
                    title="Magazine Luiza"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <ImageWebp
                    src="/assets/images/2019/01/queuniforme-magazine-luiza@2x.jpg"
                    alt="Magazine Luiza"
                    title="Magazine Luiza"
                    className="img-fluid"
                  />
                </div>
              </Slider>
              <div className="px-3 pb-4 pt-3 px-lg-4 pb-lg-4 pt-lg-4 text-center">
                <div className="h3 product__item__title text-danger mb-4">Magazine Luiza</div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}



      <div className="overlay">
      <FormSection registerEvent={registerEvent} />

      <section className="text-white bg-darkgray" id="ondeEstamos">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-md-3">
              <h2 className="h2 mb-2" >Onde Estamos</h2>
             <div className="d-flex justify-content-center">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.1922805407244!2d-49.419385385071585!3d-20.783507586131744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdac4e3905ac0b%3A0x4e72adc1dafd9b!2sR.%20Jos%C3%A9%20Roberto%20Bresser%2C%20337%20-%20Jardim%20Alice%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP%2C%2015041-591!5e0!3m2!1spt-BR!2sbr!4v1610027557560!5m2!1spt-BR!2sbr" width="800" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" ></iframe>
             </div>
            </div>
          </div>
          </div>
      </section>

      <footer className="footer bg-lightblack text-white">
        <div className="container">

          <div className="row">
            <div className="col-12">
              <div className="footer__wrapper">
                <div className="row">
                  <div className="col-12 col-lg-3">
                    <div className="footer__item">
                      <h4>Horário de Atendimento</h4>
                      <p className="text-white">
                        Segunda à Sexta: 08h00 as 18h00
                        <br />
                        Sábado, Domingo e Feriados: Fechado
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3">
                    <div className="footer__item">
                      <h4>Nossos Produtos</h4>
                      <ul>
                        <li>
                          <a className="js-anchor text-white text-underline " href="#produtos" title="Ver Linha Serviço">
                            Linha Serviço
                          </a>
                        </li>
                        {/* <li>
                          <a className="js-anchor text-white text-underline" href="#produtos" title="Ver Linha Evento">
                            Linha Evento
                          </a>
                        </li> */}
                        <li>
                          <a className="js-anchor text-white text-underline" href="#produtos" title="Ver Linha Promocional">
                            Linha Promocional
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3">
                    <div className="footer__item">
                      <h4>Onde nos encontrar</h4>
                      <p>
                        <a
                          href="//www.facebook.com/queuniforme/"
                          target="_blank"
                          rel="noopener"
                          className="text-white text-underline"
                          title="Ver Facebook da QueUniforme!"
                        >
                          Facebook
                        </a>
                        <br />
                        <a
                          href="//www.instagram.com/queuniforme/"
                          target="_blank"
                          rel="noopener"
                          className="text-white text-underline"
                          title="Ver Instagram da QueUniforme!"
                        >
                          Instagram
                        </a>
                        <br />
                        <a
                          href="//br.pinterest.com/queuniforme/"
                          target="_blank"
                          rel="noopener"
                          className="text-white text-underline"
                          title="Ver Pinterest da QueUniforme!"
                        >
                          Pinterest
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3">
                    <div className="footer__item item__icon-frase">
                      <img
                        src="/assets/images/maquina-de-costura-queuniforme-a.svg"
                        alt="Quem costura, a alma cura! QueUniforme!"
                        loading="lazy"
                      />
                      <p className="text-white">Quem costura, a alma cura!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="footer__rights">
                QueUniforme! 2020 - Todos os direitos reservados
                <br />
                Feito com
                <img loading="lazy" src="/assets/images/coracao.svg" alt="Feito com o coração" />
              </p>
            </div>
          </div>
        </div>
      </footer>
      </div>
      <SmoothScroll />
      <script src="https://mesa.cx/js/footer.min.js" bg="#222" async />
    </>
  );
}
