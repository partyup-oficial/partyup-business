import { useRef } from "react";
import Logo from "../assets/logo.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export default function Benefits() {
  const carousel = useRef(null);
  return (
    <div className="pb-12">
      <h1 className="text-4xl font-bold text-purple-200 text-border-pink-400 text-border-size-[16px] text-center mb-10">
        Por que adquirir PartyUp Business?
      </h1>
      <div
        className="flex gap-8 px-6 overflow-hidden w-[80%] m-auto rounded-3xl"
        ref={carousel}>
        <div className=" bg-[#481645] p-4 rounded-3xl m-auto">
          <div className="flex flex-col items-center gap-2 text-white w-[15rem] h-[24rem]">
            <img src={Logo} alt="partyup-logo" width={150} />
            <h1 className="text-lg font-bold text-center">Visão Abrangente</h1>
            <p className="">
              O dashboard oferece uma visão holística das métricas essenciais
              dos eventos, proporcionando uma compreensão abrangente do
              desempenho.
            </p>
          </div>
        </div>
        <div className=" bg-[#481645] p-4 rounded-3xl m-auto">
          <div className="flex flex-col items-center gap-2 text-white w-[15rem] h-[24rem]">
            <img src={Logo} alt="partyup-logo" width={150} />
            <h1 className="text-lg font-bold text-center">
              Interatividade Gráfica
            </h1>
            <p className="">
              Gráficos interativos tornam a interpretação de dados instantânea e
              fácil, proporcionando insights visuais para os organizadores.
            </p>
          </div>
        </div>
        <div className=" bg-[#481645] p-4 rounded-3xl m-auto">
          <div className="flex flex-col items-center gap-2 text-white w-[15rem] h-[24rem]">
            <img src={Logo} alt="partyup-logo" width={150} />
            <h1 className="text-lg font-bold text-center">
              Monitoramento de Presenças
            </h1>
            <p className="">
              Monitora presenças confirmadas em tempo real, agregando eficiência
              operacional e proporcionando uma gestão ágil e adaptativa do
              evento.
            </p>
          </div>
        </div>
        <div className=" bg-[#481645] p-4 rounded-3xl m-auto">
          <div className="flex flex-col items-center gap-2 text-white w-[15rem] h-[24rem]">
            <img src={Logo} alt="partyup-logo" width={150} />
            <h1 className="text-lg font-bold text-center">Ajustes Dinâmicos</h1>
            <p className="">
              Destaca métricas cruciais, como likes, presenças confirmadas e
              acessos, permitindo ajustes dinâmicos para potencializar o
              engajamento dos participantes.
            </p>
          </div>
        </div>
        <div className=" bg-[#481645] p-4 rounded-3xl m-auto">
          <div className="flex flex-col items-center gap-2 text-white w-[15rem] h-[24rem]">
            <img src={Logo} alt="partyup-logo" width={150} />
            <h1 className="text-lg font-bold text-center">
              Identificação de Tendências
            </h1>
            <p className="">
              Permite a análise de dados ao longo do tempo, identificando
              padrões de participação, picos de interesse e tendências
              específicas nos dias da semana.
            </p>
          </div>
        </div>
        <div className=" bg-[#481645] p-4 rounded-3xl m-auto">
          <div className="flex flex-col items-center gap-2 text-white w-[15rem] h-[24rem]">
            <img src={Logo} alt="partyup-logo" width={150} />
            <h1 className="text-lg font-bold text-center">
              Filtros Personalizados
            </h1>
            <p className="">
              Oferece flexibilidade e adaptação com filtros personalizados,
              permitindo a segmentação por cidades, horários e dias da semana
              para personalização eficaz do evento.
            </p>
          </div>
        </div>
        <div className=" bg-[#481645] p-4 rounded-3xl m-auto">
          <div className="flex flex-col items-center gap-2 text-white w-[15rem] h-[24rem]">
            <img src={Logo} alt="partyup-logo" width={150} />
            <h1 className="text-lg font-bold text-center">
              Otimização de Estratégias
            </h1>
            <p className="">
              Contribui para a otimização das estratégias de promoção,
              fornecendo análise em tempo real de picos de interesse e padrões
              de participação, maximizando o impacto.
            </p>
          </div>
        </div>
        <div className=" bg-[#481645] p-4 rounded-3xl m-auto">
          <div className="flex flex-col items-center gap-2 text-white w-[15rem] h-[24rem]">
            <img src={Logo} alt="partyup-logo" width={150} />
            <h1 className="text-lg font-bold text-center">
              Avaliação de Impacto
            </h1>
            <p className="">
              A análise de likes permite uma avaliação do impacto do evento,
              identificando áreas de destaque e oportunidades de melhoria para
              futuras edições.
            </p>
          </div>
        </div>
        <div className=" bg-[#481645] p-4 rounded-3xl m-auto">
          <div className="flex flex-col items-center gap-2 text-white w-[15rem] h-[24rem]">
            <img src={Logo} alt="partyup-logo" width={150} />
            <h1 className="text-lg font-bold text-center">
              Aprendizado Contínuo
            </h1>
            <p className="">
              Facilita a aprendizagem contínua com cada edição do evento,
              permitindo ajustes progressivos para aprimorar a qualidade e
              eficácia ao longo do tempo.
            </p>
          </div>
        </div>
        <div className=" bg-[#481645] p-4 rounded-3xl m-auto">
          <div className="flex flex-col items-center gap-2 text-white w-[15rem] h-[24rem]">
            <img src={Logo} alt="partyup-logo" width={150} />
            <h1 className="text-lg font-bold text-center">
              Facilidade de Utilização
            </h1>
            <p className="">
              Apresenta uma interface intuitiva e gráficos interativos, tornando
              a ferramenta acessível mesmo para usuários sem conhecimentos
              técnicos avançados.
            </p>
          </div>
        </div>
        <div className=" bg-[#481645] p-4 rounded-3xl m-auto">
          <div className="flex flex-col items-center gap-2 text-white w-[15rem] h-[24rem]">
            <img src={Logo} alt="partyup-logo" width={150} />
            <h1 className="text-lg font-bold text-center">
              Customização Regional
            </h1>
            <p className="">
              Permite a adaptação às necessidades locais com filtros
              personalizados, atendendo às preferências regionais e
              comportamentos específicos do público-alvo.
            </p>
          </div>
        </div>
        <div className=" bg-[#481645] p-4 rounded-3xl m-auto">
          <div className="flex flex-col items-center gap-2 text-white w-[15rem] h-[24rem]">
            <img src={Logo} alt="partyup-logo" width={150} />
            <h1 className="text-lg font-bold text-center">
              Geração de Relatórios Automáticos
            </h1>
            <p className="">
              Facilita a geração automática de relatórios pós-evento, fornecendo
              informações cruciais para avaliação e planejamento futuro.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <button
          onClick={() => {
            carousel.current.scrollLeft += 350;
          }}
          className="absolute bottom-40 right-32">
          <FaArrowRight size={50} color="#af77bd" />
        </button>
        <button
          onClick={() => {
            carousel.current.scrollLeft -= 350;
          }}
          className="absolute bottom-40 left-32">
          <FaArrowLeft size={50} color="#af77bd" />
        </button>
      </div>
    </div>
  );
}
