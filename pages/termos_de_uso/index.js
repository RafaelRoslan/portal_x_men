//conteúdo Normas de Uso

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default ()=>{

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');
     
    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div class="row mt-3 d-flex align-content-center justify-content-center">
        <article class="col-12 col-sm-11 col-md-11 col-lg-11 col-xl-12 col-xxl-12  d-grid gap-4 text-justify">
          <h1 class="text-center">TERMOS DE USO</h1>
          <section>
            <h3>TERMOS E CONDIÇÕES GERAIS DE USO DO SITE</h3>
            <p>Este documento, e todo o conteúdo do site é oferecido por Clube das Winx com o endereço
              http://127.0.0.1:5500/ neste termo representado apenas por "Portal X-Verse", que regulamenta todos os
              direitos e obrigações com todos que acessam o site, denominado neste termo como "VISITANTE", resguardado
              todos os direitos previstos na legislação, trazem as cláusulas abaixo como requisito para acesso e visita
              do mesmo.</p>
            <p>A aceitação destes Termos e condições gerais é absolutamente indispensável à utilização do site e dos
              Serviços prestados pelo “Portal X-Verse”.</p>
            <p>Em caso de dúvidas, comentários ou sugestões sobre esses termos ou sobre os Serviços, entre em contato
              conosco pelo e-mail winx@portalxverse.com.</p>
          </section>
          <section>
            <h3>SEÇÃO 01 – ALTERAÇÕES NOS TERMOS E CONDIÇÕES GERAIS DE USO</h3>
            <p>O “Portal X-verse” poderá alterar, a qualquer tempo, estes Termos e condições gerais de uso, visando seu
              aprimoramento e melhoria dos Serviços prestados, independentemente de notificação prévia. O VISITANTE
              deverá comunicar-se por e-mail no prazo de 05 (cinco) dias úteis caso não concorde com os termos
              alterados, contados a partir das alterações. Nesse caso, o vínculo contratual deixará de existir, desde
              que não haja contas ou dívidas em aberto. Não havendo manifestação no prazo estipulado, entender-se-á que
              o VISITANTE aceitou os novos Termos e condições gerais de uso e o contrato continuará vinculando as
              partes.</p>
          </section>
          <section>
            <h3>SEÇÃO 02 – PRIVACIDADE DAS INFORMAÇÕES</h3>
            <p>Toda informação ou Dado Pessoal do VISITANTE é armazenado em servidores ou meios magnéticos de alta
              segurança. Salvo com relação às informações que são publicadas no Site, o “Portal X-Verse” adotará todas
              as medidas possíveis para manter a confidencialidade e a segurança das informações sigilosas, porém não se
              responsabilizará por eventuais prejuízos que sejam decorrentes da divulgação de tais informações por parte
              de terceiros que utilizem as redes públicas ou a internet, subvertendo os sistemas de segurança para
              acessar as informações de VISITANTE.</p>
          </section>
          <section>
            <h3>SEÇÃO 03 – PRÁTICAS VEDADAS</h3>
            <p>Os Usuários não poderão, entre outras atitudes previstas nestes Termos e condições gerais e seus anexos:
              a&#41; praticar atos ilícitos; b&#41; infringir ou violar nossos direitos de propriedade intelectual e
              industrial ou os direitos de propriedade intelectual e industrial de terceiros; c&#41; apresentar
              informações falsas ou enganosas; d&#41; manipular os preços dos produtos anunciados; e&#41; interferir nas
              negociações entre outros Usuários; f&#41; divulgar dados pessoais de contato por qualquer meio, em
              qualquer espaço do aplicativo/site, antes de manifestada a intenção na compra do item anunciado; g&#41;
              agredir, caluniar, injuriar ou difamar outros Usuários.</p>
            <p>Estes tipos de comportamento poderão ser sancionados com o cancelamento do anúncio, ou com o bloqueio da
              conta do Usuário, sem prejuízo das ações legais que possam ocorrer pela configuração de delitos ou
              contravenções ou os prejuízos civis que possam causar aos outros Usuários, ao “nome fantasia” ou
              terceiros.</p>
          </section>
          <section>
            <h3>SEÇÃO 04 – VIOLAÇÃO NO SISTEMA OU DA BASE DE DADOS</h3>
            <p>Qualquer intromissão, tentativa ou atividade que viole ou contrarie as leis de direito de propriedade
              intelectual e/ou as proibições estipuladas nestes Termos e condições gerais de uso, tornarão o responsável
              passível das ações legais pertinentes, bem como das sanções aqui previstas, sendo ainda responsável pelas
              indenizações por eventuais danos causados.</p>
          </section>
          <section>
            <h3>SEÇÃO 05 – PENALIDADES</h3>
            <p>Sem prejuízo de outras medidas cabíveis, o “Portal X-Verse” poderá advertir, suspender, temporária ou
              definitivamente, a conta de um Usuário, cancelar os seus anúncios ou aplicar uma sanção que impacte
              negativamente em sua reputação, a qualquer tempo, iniciando as ações legais cabíveis e/ou suspendendo a
              prestação de seus Serviços.</p>
          </section>
          <section>
            <h3>SEÇÃO 06 – LIMITAÇÃO DE RESPONSABILIDADE</h3>
            <p>O “Portal X-Verse” não se responsabiliza por vícios ou defeitos técnicos e/ou operacionais oriundos do
              sistema do VISITANTE ou de terceiros.</p>
            <p>O “Portal X-Verse” não se responsabiliza, por conseguinte, pela existência, quantidade, qualidade,
              estado, integridade ou legitimidade dos produtos oferecidos, adquiridos ou alienados pelos VISITANTE,
              assim como pela capacidade para contratar dos VISITANTE ou pela veracidade dos dados pessoais por eles
              inseridos em seus cadastros.</p>
            <p>O “Portal X-Verse” não será responsável pelo efetivo cumprimento das obrigações assumidas pelos
              VISITANTE.</p>
          </section>
          <section>
            <h3>SEÇÃO 07 – LEGISLAÇÃO APLICÁVEL E FORO DE ELEIÇÃO</h3>
            <p>Todos os itens destes Termos e condições gerais de uso são regidos pelas leis vigentes na República
              Federativa do Brasil. Para todos os assuntos referentes à interpretação, ao cumprimento ou qualquer outro
              questionamento relacionado a estes Termos e condições gerais de uso, as partes concordam em se submeter ao
              Foro da Comarca de São Paulo.</p>
          </section>
          <section>
            <h3>SEÇÃO 08 – DA LICENÇA DE USO E CÓPIA</h3>
            <p>O visitante poderá acessar todo o conteúdo do website, como artigos, vídeos, imagens, produtos e
              serviços, não significando nenhum tipo de cessão de direito ou permissão de uso, ou de cópia dos mesmos.
            </p>
            <p>Todos os direitos são preservados, conforme a legislação brasileira, principalmente na Lei de Direitos
              Autorais &#40;regulamentada na Lei nº 9.610/18&#41;, assim como no Código Civil brasileiro
              &#40;regulamentada na Lei nº 10.406/02&#41;, ou quaisquer outras legislações aplicáveis.</p>
            <p>Todo o conteúdo do site é protegido por direitos autorais, e seu uso, cópia, transmissão, venda, cessão
              ou revenda, deve seguir a lei brasileira, tendo a “Portal X-Verse” todos os seus direitos reservados, e
              não permitindo a cópia ou utilização de nenhuma forma e meio, sem autorização expressa e por escrita da
              mesma.</p>
            <p>A “Portal X-Verse” poderá em casos concretos permitir pontualmente exceções a este direito, que serão
              claramente destacados no mesmo, com a forma e permissão de uso do conteúdo protegido. Este direito é
              revogável e limitado as especificações de cada caso.</p>
          </section>
          <section>
            <h3>SEÇÃO 9 – DO ACESSO AO SITE</h3>
            <p>O acesso ao site só é permitido a maiores de 18 anos de idade ou que possuírem capacidade civil plena.
              Para acesso de menores de idade, é necessária a expressa autorização dos pais ou tutores, ficando o mesmo
              responsáveis sobre qualquer compra ou acesso efetuados pelo mesmo.</p>
            <p>Todos os dados estão protegidos conforme a Lei Geral de Proteção de Dados, e ao realizar o cadastro junto
              ao site, o VISITANTE concorda integralmente com a coleta de dados conforme a Lei e com a Política de
              Privacidade da “Portal X-Verse”.</p>
          </section>
        </article>
    </div>
    `;

    //adição do template ao container - aqui nós colocamos todo o conteúdo dentro da div.
    container.innerHTML = template;

    //Portanto o retorno dessa função será algo assim:
    //<div>
    //  conteúdo do site
    //</div>
    return container;
}
