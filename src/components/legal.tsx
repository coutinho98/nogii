import { useEffect } from 'react';

const LegalPage = () => {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []); 

  return (
    <section className="bg-black text-gray-300 py-16">
      <div className="container mx-auto px-6 max-w-4xl">

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent mb-4">
            Políticas e Termos de Serviço
          </h1>
          <p className="text-gray-400">
            A seguir, você encontra as informações detalhadas sobre as políticas de privacidade, cookies e os termos de serviço.
          </p>
        </div>

        <div id="politica-privacidade" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-200 to-orange-500 bg-clip-text text-transparent mb-6">
            POLÍTICAS DE PRIVACIDADE
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-white">1. Informações do Usuário</h3>
              <p className="mt-2 text-base">
                1.1 É importante coletarmos algumas informações dos usuários de nossos serviços para que possamos oferecer um site melhor e mais direcionado às suas preferências. Também precisamos informá-los sobre novidades e informações relevantes. Por isso, leia atentamente esta política e nossos termos de uso.
              </p>
              <p className="mt-2 text-base">
                1.2 Garantimos que quaisquer informações pessoais dos usuários não serão fornecidas, publicadas ou comercializadas em quaisquer circunstâncias. Estas informações estão seguras conosco. Exceto em casos de participação do usuário em algum comentário ou postagem. Neste caso, o nome, e-mail e depoimento poderão ser publicados, conforme nossos termos de uso.
              </p>
            </div>
          </div>
        </div>

        <div id="politica-cookies" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-200 to-orange-500 bg-clip-text text-transparent mb-6">
            POLÍTICAS DE COOKIES
          </h2>
          <div className="space-y-4">
            <p className="text-base">
              1. Podemos utilizar a tecnologia de cookies para melhorar a experiência do usuário. Isso auxilia na identificação do seu IP, facilitando a navegação e customizando a navegação. Você pode bloquear qualquer uso de cookies diretamente no seu navegador.
            </p>
          </div>
        </div>

        <div id="termos-servicos" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-200 to-orange-500 bg-clip-text text-transparent mb-6">
            TERMOS DE SERVIÇOS
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-white">1. Aviso Legal</h3>
              <p className="mt-2 text-base">
                1.1 Você concorda e entende que o Wilgner Silva se esforça ao máximo para evitar, mas não consegue garantir que arquivos disponíveis para download via Internet estejam livres de vírus, worms, cavalos de Tróia ou outro código que possa manifestar propriedades contaminadoras ou destrutivas.
              </p>
              <p className="mt-2 text-base">
                1.2 Você é responsável por implementar práticas, procedimentos e checagens de segurança dos seus dispositivos (computador, smartphone, tablet, etc.) e por manter meios externos a este e outros sites para reconstrução de qualquer dado perdido. O Wilgner Silva não assume nenhuma responsabilidade ou risco pelo seu uso da internet.
              </p>
              <p className="mt-2 text-base">
                1.3 O uso deste site é de sua total responsabilidade.
              </p>
              <p className="mt-2 text-base">
                1.4 Os conteúdos deste e de outros programas do Wilgner Silva não são necessariamente completos e atualizados e não devem ser usados para substituir quaisquer relatórios, declarações, recomendações das ferramentas e plataformas utilizadas nos treinamento ou avisos dados pela Wilgner Silva.
              </p>
              <p className="mt-2 text-base">
                1.5 A informação obtida ao usar este site não é completa e não cobre todas as questões, tópicos ou fatos que possam ser relevantes para seus objetivos.
              </p>
              <p className="mt-2 text-base">
                1.6 O Conteúdo é oferecido na forma “como está” e não tem nenhuma garantia de resultado de qualquer tipo, expressa ou implícita. o Wilgner Silva não garante que as funções ou o conteúdo dos programas serão contínuos, livres de erro ou que falhas serão corrigidas ou que este site e os servidores que o tornam disponíveis estejam livres de vírus ou outros componentes destrutivos.
              </p>
              <p className="mt-2 text-base">
                1.7 O Wilgner Silva não garante ou faz qualquer representação relacionada ao uso ou resultados do uso dos conteúdos de seus programas em termos de precisão, confiabilidade ou outros. O conteúdo dos programas pode incluir imprecisões técnicas ou erros tipográficos e o Wilgner Silva pode fazer mudanças e melhorias a qualquer tempo, sem aviso prévio. Você, e não o Wilgner Silva, assume o custo de qualquer serviço, reparo ou correção necessários no caso de qualquer perda ou dano consequente do uso deste programa. O Wilgner Silva não oferece garantia que o uso dos seus programas não irá infringir o direito de outro e não assume qualquer responsabilidade por erros ou omissões no conteúdo. Toda informação desse programa, seja de natureza histórica ou prospectivas, é válida somente para a data que foi publicada no site e o Wilgner Silva não se compromete com nenhuma obrigação de atualizar tal informação depois que é publicada ou remover tal informação deste e de qualquer outro site caso ela não seja (mais) precisa ou completa.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">2. Limitação de responsabilidade</h3>
              <p className="mt-2 text-base">
                2.1 O Wilgner Silva, suas Filiais, Afiliados, Licenciantes, Provedores de Serviço, Provedores de Conteúdo, Empregados, Agentes, Administradores e Diretores não serão responsáveis por qualquer dano eventual, direto, indireto, punitivo, real, consequente, especial, exemplar ou de qualquer outro tipo, incluindo perda de receita ou renda, dor ou sofrimento, estresse emocional ou similares mesmo que a Empresa tenha aconselhado sobre a possibilidade de tais danos. De nenhuma forma, a responsabilidade coletiva do Wilgner Silva, suas Filiais, Afiliados, Licenciantes, Provedores de Serviço, Provedores de Conteúdo, Empregados, Agentes, Administradores e Diretores em relação a terceiros (independentemente do tipo de ação, seja por contrato ou qualquer outro) excederá a quantia de R$100 (cem reais) ou o valor pago à empresa por tal Conteúdo, Produto ou Serviço ao qual a questão tenha sido levantada. Se você não aceitar esta limitação de responsabilidade, você não está autorizado a obter ou acessar qualquer material por meio dos serviços ou sites do Wilgner Silva, incluindo todos os seus programas, como os Serviços do Wilgner Silva.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LegalPage;