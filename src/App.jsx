import { useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Moon,
  Sun,
  Code2,
  Database,
  Monitor,
  Smartphone,
  ExternalLink,
  GraduationCap,
  BriefcaseBusiness,
  FolderGit2,
  Send,
  CheckCircle2,
  MapPin,
  FileSpreadsheet,
  ChartNoAxesCombined,
  WalletCards,
  Receipt,
  Calculator,
  ClipboardList,
} from 'lucide-react';

const projects = [
  {
    title: 'Meu Assistente',
    category: 'Aplicação web',
    status: 'Projeto pessoal',
    description:
      'Plataforma web de organização e gestão pessoal, com módulos integrados para tarefas, hábitos, estudos, projetos, calendário e acompanhamento de objetivos. Projeto com publicação e hospedagem via Vercel.',
    stack: ['React', 'JavaScript', 'Node.js', 'Vercel'],
    icon: Monitor,
    accent: 'violet',
    link: 'https://meu-assistente-gc92.vercel.app/',
    github: '',
  },
  {
    title: 'Nexus Tech',
    category: 'E-commerce',
    status: 'Projeto acadêmico',
    description:
      'Loja virtual desenvolvida como projeto prático, com catálogo de produtos, páginas de detalhes, carrinho e navegação entre rotas.',
    stack: ['React', 'JavaScript', 'CSS', 'Vercel'],
    icon: Smartphone,
    accent: 'cyan',
    link: 'https://nexus-tech-nu.vercel.app/',
    github: '',
  },
  {
    title: 'Algoritmos e Sistemas Dinâmicos em Grafos',
    category: 'Iniciação científica',
    status: 'Iniciação científica • Em andamento',
    description:
      'Pesquisa em teoria dos grafos e sistemas dinâmicos em redes. Envolve implementação em Python de estruturas e algoritmos de grafos (BFS, DFS e Kruskal), construção e análise da matriz Laplaciana e simulações de difusão de calor em uma rede com duas comunidades, utilizando o método de Euler explícito.',
    stack: [
      'Python',
      'Teoria dos grafos',
      'BFS e DFS',
      'Kruskal',
      'Matriz Laplaciana',
      'Simulação numérica',
    ],
    icon: Database,
    accent: 'orange',
    link: '',
    github: '',
    document: '/projetos/relatorio-iniciacao-cientifica.pdf',
  },
  {
    title: 'Análise e Modelagem de Dados',
    category: 'Dados',
    status: 'Projeto prático',
    description:
      'Utilização de Python para tratamento, exploração e análise de dados, organizando informações para apoiar a interpretação de resultados e a tomada de decisão.',
    stack: ['Python', 'Análise de dados', 'Modelagem'],
    icon: Database,
    accent: 'cyan',
    link: '',
    github: '',
  },
];

const skills = [
  {
    name: 'JavaScript',
    level: 'Conhecimento em desenvolvimento',
    group: 'Programação',
    icon: Code2,
  },
  {
    name: 'Java',
    level: 'Conhecimento em desenvolvimento',
    group: 'Programação',
    icon: Code2,
  },
  {
    name: 'Kotlin',
    level: 'Conhecimento em desenvolvimento',
    group: 'Programação',
    icon: Code2,
  },
  {
    name: 'HTML e CSS',
    level: 'Desenvolvimento web',
    group: 'Web',
    icon: Monitor,
  },
  {
    name: 'Python',
    level: 'Tratamento e análise de dados',
    group: 'Dados',
    icon: Code2,
  },
  {
    name: 'Grafos e algoritmos',
    level: 'Estudos e implementação',
    group: 'Computação',
    icon: Database,
  },
  {
    name: 'Estruturas de dados',
    level: 'Fundamentos',
    group: 'Computação',
    icon: Database,
  },
  {
    name: 'Excel avançado',
    level: 'Planilhas e análise',
    group: 'Produtividade',
    icon: Monitor,
  },
  {
    name: 'Android Studio',
    level: 'Desenvolvimento Android',
    group: 'Ferramentas',
    icon: Smartphone,
  },
  {
    name: 'Jetpack Compose',
    level: 'Interfaces Android',
    group: 'Ferramentas',
    icon: Smartphone,
  },
  {
    name: 'Word e PowerPoint',
    level: 'Documentação e apresentações',
    group: 'Produtividade',
    icon: Monitor,
  },
  {
    name: 'Relatórios e dashboards',
    level: 'Organização e apresentação de dados',
    group: 'Dados',
    icon: Database,
  },
];

const courses = [
  ['Bootcamp de Ciência de Dados', 'Avanti', 'Concluído'],
  [
    'Curso de Administração e Contabilidade',
    'Formação complementar',
    'Concluído',
  ],
  ['Bootcamp de JavaScript', 'Formação complementar', 'Em andamento'],
  ['Excel Avançado', 'Hashtag Treinamentos', 'Em andamento'],
  [
    'Desenvolvimento Android com Android Studio e Kotlin',
    'Formação complementar',
    'Em andamento',
  ],
  [
    'Trilha NoCode/IA e Especialização em Soft Skills',
    'Formação complementar',
    'Em andamento',
  ],
];

const nav = [
  ['Início', 'inicio'],
  ['Sobre', 'sobre'],
  ['Habilidades', 'habilidades'],
  ['Projetos', 'projetos'],
  ['Planilhas', 'planilhas'],
  ['Formação', 'formacao'],
  ['Contato', 'contato'],
];

const spreadsheets = [
  {
    title: 'Fluxo de Caixa',
    file: '04-fluxo-de-caixa.xlsx',
    desc: 'Controle das entradas, saídas e disponibilidade financeira da empresa.',
    context:
      'Pensada para pequenos e médios negócios que precisam acompanhar diariamente suas movimentações financeiras e planejar a disponibilidade de recursos.',
    problem:
      'A falta de acompanhamento do dinheiro que entra e sai pode provocar dificuldades para pagar compromissos, identificar períodos de baixa liquidez e planejar investimentos.',
    solution:
      'Centraliza entradas e saídas, calcula o saldo diário e acumulado e apresenta indicadores e gráficos para facilitar o acompanhamento financeiro e a tomada de decisões.',
    tags: ['Tesouraria', 'Saldo acumulado', 'Gráficos'],
    icon: WalletCards,
  },
  {
    title: 'Contas a Pagar e Receber',
    file: '02-contas-pagar-receber.xlsx',
    desc: 'Gestão de compromissos financeiros, recebimentos e valores pendentes.',
    context:
      'Pensada para empresas que realizam vendas a prazo, possuem fornecedores e precisam controlar seus compromissos financeiros.',
    problem:
      'A ausência de um controle centralizado pode causar pagamentos atrasados, juros, esquecimentos de vencimentos e aumento da inadimplência.',
    solution:
      'Organiza contas a pagar e receber, datas de vencimento, valores, status e atrasos, permitindo acompanhar obrigações e recebimentos com maior precisão.',
    tags: ['Vencimentos', 'Inadimplência', 'Contas em aberto'],
    icon: Receipt,
  },
  {
    title: 'Dashboard Gerencial',
    file: '05-dashboard-gerencial.xlsx',
    desc: 'Painel visual com indicadores financeiros e operacionais para gestão empresarial.',
    context:
      'Pensado para gestores e profissionais administrativos que precisam acompanhar o desempenho da empresa de maneira rápida e consolidada.',
    problem:
      'Informações dispersas em diferentes planilhas dificultam a interpretação dos resultados e tornam mais lenta a identificação de problemas e oportunidades.',
    solution:
      'Reúne receitas, custos, despesas, resultados e indicadores em um painel visual com gráficos e métricas que facilitam a análise gerencial.',
    tags: ['KPIs', 'Indicadores', 'Dashboard'],
    icon: ChartNoAxesCombined,
  },
  {
    title: 'DRE Gerencial',
    file: '06-dre-gerencial.xlsx',
    desc: 'Análise estruturada das receitas, custos, despesas e resultados da empresa.',
    context:
      'Pensada para empresas que desejam acompanhar seu desempenho econômico mensal e compreender a composição de seus resultados.',
    problem:
      'Observar apenas o faturamento não permite identificar todos os custos e despesas envolvidos na operação nem avaliar corretamente a rentabilidade.',
    solution:
      'Organiza receitas, deduções, custos e despesas em uma estrutura gerencial, permitindo visualizar lucro bruto, resultado operacional e margens.',
    tags: ['Receita líquida', 'Lucro', 'Margens'],
    icon: Calculator,
  },
  {
    title: 'Orçamento x Realizado',
    file: '07-orcamento-vs-realizado.xlsx',
    desc: 'Comparação entre planejamento financeiro e resultados efetivamente alcançados.',
    context:
      'Pensada para departamentos financeiros e administrativos que elaboram orçamentos e precisam acompanhar sua execução.',
    problem:
      'Sem comparar o planejado com o realizado, a empresa pode não perceber gastos acima do orçamento ou receitas abaixo das metas.',
    solution:
      'Compara valores previstos e realizados, calcula diferenças absolutas e percentuais e permite identificar desvios para orientar ações corretivas.',
    tags: ['Planejamento', 'Desvios', 'Controle'],
    icon: ClipboardList,
  },
  {
    title: 'Custos e Formação de Preço',
    file: '08-custos-e-formacao-de-preco.xlsx',
    desc: 'Composição de custos e apoio à definição do preço de venda.',
    context:
      'Pensada para empresas comerciais e prestadoras de serviços que precisam estabelecer preços considerando seus custos e objetivos de rentabilidade.',
    problem:
      'Definir preços sem considerar custos, despesas e margem desejada pode comprometer a competitividade e gerar prejuízos.',
    solution:
      'Organiza os componentes dos custos, considera despesas e margem desejada e auxilia no cálculo do preço sugerido e do lucro estimado.',
    tags: ['Custos', 'Precificação', 'Margem'],
    icon: Calculator,
  },
  {
    title: 'Controle Financeiro',
    file: '01-controle-financeiro.xlsx',
    desc: 'Organização e acompanhamento das movimentações financeiras.',
    context:
      'Pensada para profissionais autônomos e pequenos negócios que precisam organizar receitas e despesas em um único ambiente.',
    problem:
      'Registros informais e informações financeiras fragmentadas dificultam identificar para onde o dinheiro está indo e quanto realmente sobra.',
    solution:
      'Padroniza os lançamentos financeiros, permite classificar receitas e despesas e oferece uma visão consolidada das movimentações.',
    tags: ['Receitas', 'Despesas', 'Organização'],
    icon: FileSpreadsheet,
  },
  {
    title: 'Controle de Estoque',
    file: '03-controle-estoque.xlsx',
    desc: 'Acompanhamento das entradas, saídas e quantidades disponíveis de produtos.',
    context:
      'Pensada para empresas comerciais que precisam monitorar seus produtos e manter informações atualizadas sobre o estoque.',
    problem:
      'A falta de controle pode provocar falta de mercadorias, compras desnecessárias, divergências no inventário e perdas financeiras.',
    solution:
      'Registra movimentações de entrada e saída e permite acompanhar quantidades disponíveis, facilitando o planejamento de reposição.',
    tags: ['Entradas', 'Saídas', 'Inventário'],
    icon: ClipboardList,
  },
];

function App() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem('portfolio-theme') !== 'light';
    } catch {
      return true;
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('Todos');
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [sent, setSent] = useState(false);
  const filters = [
    'Todos',
    'Aplicação web',
    'E-commerce',
    'Iniciação científica',
    'Dados',
  ];
  const visibleProjects = useMemo(
    () =>
      filter === 'Todos'
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  const toggleTheme = () =>
    setDark((current) => {
      const next = !current;
      try {
        localStorage.setItem('portfolio-theme', next ? 'dark' : 'light');
      } catch {}
      return next;
    });

  const submitContact = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato pelo portfólio — ${form.nome}`);
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nE-mail: ${form.email}\n\n${form.mensagem}`,
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=Oliveira.santos62%40aluno.ifce.edu.br&su=${subject}&body=${body}`,
      '_blank',
      'noopener,noreferrer',
    );
    setSent(true);
  };

  return (
    <div className={dark ? 'app dark' : 'app light'}>
      <header className='header'>
        <a className='brand' href='#inicio' aria-label='Ir para o início'>
          <span className='brand-mark'>
            G<span>.</span>
          </span>
          <span>
            gabriel<span className='brand-muted'>.dev</span>
          </span>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className='header-actions'>
          <button
            className='theme-toggle'
            onClick={toggleTheme}
            aria-label={dark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            title={dark ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {dark ? (
              <>
                <Sun size={17} /> <span>Modo claro</span>
              </>
            ) : (
              <>
                <Moon size={17} /> <span>Modo escuro</span>
              </>
            )}
          </button>
          <a className='button button-small header-cta' href='#contato'>
            Vamos conversar <ArrowUpRight size={15} />
          </a>
          <button
            className='icon-btn menu-toggle'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Abrir menu'
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className='hero section' id='inicio'>
          <div className='hero-copy'>
            <div className='eyebrow'>
              <span className='status-dot' /> DISPONÍVEL PARA OPORTUNIDADES
            </div>
            <p className='hero-kicker'>Olá, meu nome é</p>
            <h1>
              Gabriel <span>Oliveira.</span>
            </h1>
            <h2>
              Estudante de Computação e Administração{' '}
              <span className='accent-text'> | Tecnologia e dados.</span>
            </h2>
            <p className='hero-description'>
              Estudante de Ciência da Computação e Administração, com
              experiência em apoio à gestão administrativa e interesse em
              tecnologia, desenvolvimento de sistemas, dados e melhoria de
              processos.
            </p>
            <div className='hero-actions'>
              <a className='button' href='#projetos'>
                Explorar projetos <ArrowUpRight size={17} />
              </a>
              <a
                className='button button-ghost'
                href='/curriculo-gabriel-oliveira.pdf'
                target='_blank'
                rel='noreferrer'
              >
                Ver currículo <ArrowDown size={16} />
              </a>
            </div>
            <div className='socials'>
              <a
                href='https://portfolio-gabriel3-d89b.vercel.app/'
                target='_blank'
                rel='noreferrer'
              >
                <ExternalLink size={16} /> Meu portfólio
              </a>
              <span>
                <MapPin size={16} /> Fortaleza, CE
              </span>
            </div>
          </div>
          <div className='hero-visual'>
            <div className='orbit orbit-one' />
            <div className='orbit orbit-two' />
            <div className='code-card'>
              <div className='code-top'>
                <div className='window-dots'>
                  <i />
                  <i />
                  <i />
                </div>
                <span>developer.js</span>
                <span className='code-live'>●</span>
              </div>
              <div className='code-content'>
                <div>
                  <span className='line-no'>01</span>
                  <span className='code-purple'>const</span>{' '}
                  <span className='code-blue'>developer</span> = {'{'}
                </div>
                <div>
                  <span className='line-no'>02</span>&nbsp; name:{' '}
                  <span className='code-green'>'Gabriel'</span>,
                </div>
                <div>
                  <span className='line-no'>03</span>&nbsp; focus:{' '}
                  <span className='code-green'>'Web development'</span>,
                </div>
                <div>
                  <span className='line-no'>04</span>&nbsp; learning: [
                </div>
                <div>
                  <span className='line-no'>05</span>&nbsp;&nbsp;{' '}
                  <span className='code-orange'>'React'</span>,{' '}
                  <span className='code-orange'>'JavaScript'</span>,
                </div>
                <div>
                  <span className='line-no'>06</span>&nbsp;&nbsp;{' '}
                  <span className='code-orange'>'Python'</span>,{' '}
                  <span className='code-orange'>'SQL'</span>
                </div>
                <div>
                  <span className='line-no'>07</span>&nbsp; ],
                </div>
                <div>
                  <span className='line-no'>08</span>&nbsp; mindset:{' '}
                  <span className='code-green'>'Always learning'</span>
                </div>
                <div>
                  <span className='line-no'>09</span>
                  {'}'};
                </div>
                <div className='code-cursor'>▍</div>
              </div>
            </div>
            <div className='floating-chip chip-react'>
              <span>⚛</span> React
            </div>
            <div className='floating-chip chip-js'>
              <span>JS</span> JavaScript
            </div>
            <div className='floating-chip chip-python'>
              <span>Py</span> Python
            </div>
            <div className='hero-glow' />
          </div>
          <a href='#sobre' className='scroll-hint'>
            <ArrowDown size={15} /> Role para conhecer
          </a>
        </section>

        <section className='section about-section' id='sobre'>
          <div className='section-heading'>
            <span className='section-index'>01 / SOBRE</span>
            <h2>
              Curiosidade que vira{' '}
              <span className='accent-text'>construção.</span>
            </h2>
          </div>
          <div className='about-grid'>
            <div className='about-lead'>
              <p className='large-copy'>
                Sou um estudante interessado em tecnologia, programação e
                resolução de problemas.
              </p>
              <p>
                Minha trajetória reúne estudos em computação, administração e
                contabilidade, além de experiência em atividades de apoio à
                gestão administrativa. Participei de Iniciação Científica na
                área de Grafos e Algoritmos e desenvolvo projetos práticos em
                programação e análise de dados.
              </p>
              <p>
                Tenho perfil organizado e analítico, facilidade para aprender
                ferramentas e interesse em aplicar tecnologia para melhorar
                processos e apoiar a tomada de decisão.
              </p>
              <a className='text-link' href='#contato'>
                Conheça minha trajetória <ArrowUpRight size={16} />
              </a>
            </div>
            <div className='about-facts'>
              <div className='fact-card'>
                <span className='fact-icon'>
                  <Code2 />
                </span>
                <strong>Aprender fazendo</strong>
                <p>Projetos práticos como parte do processo de evolução.</p>
              </div>
              <div className='fact-card'>
                <span className='fact-icon'>
                  <Database />
                </span>
                <strong>Pensamento analítico</strong>
                <p>
                  Interesse por lógica, dados e resolução estruturada de
                  problemas.
                </p>
              </div>
              <div className='fact-card'>
                <span className='fact-icon'>
                  <BriefcaseBusiness />
                </span>
                <strong>Visão profissional</strong>
                <p>
                  Organização, responsabilidade e vontade de contribuir em
                  equipe.
                </p>
              </div>
              <div className='fact-card'>
                <span className='fact-icon'>
                  <GraduationCap />
                </span>
                <strong>Aprendizado contínuo</strong>
                <p>Construindo uma base técnica sólida, passo a passo.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='section skills-section' id='habilidades'>
          <div className='section-heading'>
            <span className='section-index'>02 / HABILIDADES</span>
            <h2>
              Ferramentas que estou{' '}
              <span className='accent-text'>desenvolvendo.</span>
            </h2>
            <p className='section-subtitle'>
              Uma visão honesta das tecnologias e áreas que fazem parte dos meus
              estudos.
            </p>
          </div>
          <div className='skills-grid'>
            {skills.map(({ name, level, group, icon: Icon }) => (
              <article className='skill-card' key={name}>
                <div className='skill-card-top'>
                  <span className='skill-icon'>
                    <Icon size={19} />
                  </span>
                  <span className='skill-group'>{group}</span>
                </div>
                <h3>{name}</h3>
                <p>{level}</p>
              </article>
            ))}
          </div>
          <div className='learning-strip'>
            <span className='learning-pulse' />
            <div>
              <strong>Em constante evolução</strong>
              <p>
                JavaScript, Java, Kotlin, Python, desenvolvimento web, Android e
                análise de dados.
              </p>
            </div>
          </div>
        </section>

        <section className='section projects-section' id='projetos'>
          <div className='section-heading projects-heading'>
            <div>
              <span className='section-index'>03 / PROJETOS</span>
              <h2>
                Ideias colocadas em{' '}
                <span className='accent-text'>prática.</span>
              </h2>
              <p className='section-subtitle'>
                Projetos pessoais, acadêmicos e experiências de iniciação
                científica.
              </p>
            </div>
            <span className='project-count'>
              0{projects.length} <small>PROJETOS</small>
            </span>
          </div>
          <div className='filters'>
            {filters.map((f) => (
              <button
                key={f}
                className={filter === f ? 'filter active' : 'filter'}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className='projects-grid'>
            {visibleProjects.map((project, i) => {
              const Icon = project.icon;
              return (
                <article
                  className={`project-card ${project.accent}`}
                  key={project.title}
                >
                  <div className='project-art'>
                    <div className='project-art-grid' />
                    <div className='project-icon'>
                      <Icon size={34} />
                    </div>
                    <span className='project-number'>0{i + 1}</span>
                    <span className='project-art-label'>
                      {project.category}
                    </span>
                  </div>
                  <div className='project-body'>
                    <div className='project-meta'>
                      <span>{project.status}</span>
                      <span className='project-dot' />
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className='tags'>
                      {project.stack.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <div className='project-links'>
                      {project.link ? (
                        <a href={project.link} target='_blank' rel='noreferrer'>
                          Ver projeto <ExternalLink size={15} />
                        </a>
                      ) : (
                        <span className='private-label'>
                          Projeto em desenvolvimento
                        </span>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target='_blank'
                          rel='noreferrer'
                        >
                          Código <Github size={15} />
                        </a>
                      )}
                      {project.document && (
                        <a
                          href={project.document}
                          target='_blank'
                          rel='noreferrer'
                        >
                          Documento da pesquisa <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <p className='project-note'>
            * Os projetos sem link público estão apresentados como trabalhos em
            desenvolvimento ou estudos. Os links de repositório podem ser
            adicionados quando publicados.
          </p>
        </section>

        <section className='section spreadsheets-section' id='planilhas'>
          <div className='section-heading projects-heading'>
            <div>
              <span className='section-index'>
                04 / ADMINISTRAÇÃO E CONTABILIDADE
              </span>
              <h2>
                Planilhas para{' '}
                <span className='accent-text'>gestão na prática.</span>
              </h2>
              <p className='section-subtitle'>
                Modelos em Excel com fórmulas, indicadores, organização visual e
                exemplos demonstrativos para rotinas administrativas,
                financeiras e contábeis.
              </p>
            </div>
            <span className='project-count'>
              08 <small>MODELOS</small>
            </span>
          </div>

          <div className='spreadsheet-grid'>
            {spreadsheets.map(
              (
                {
                  title,
                  file,
                  desc,
                  context,
                  problem,
                  solution,
                  tags,
                  icon: Icon,
                },
                i,
              ) => (
                <article className='spreadsheet-card' key={file}>
                  <div className='spreadsheet-card-top'>
                    <span className='spreadsheet-icon'>
                      <Icon size={21} />
                    </span>
                    <span className='spreadsheet-number'>0{i + 1} / XLSX</span>
                  </div>

                  <h3>{title}</h3>

                  <p className='spreadsheet-desc'>{desc}</p>

                  <div className='spreadsheet-details'>
                    <div className='spreadsheet-detail'>
                      <strong>Contexto pensado</strong>
                      <p>{context}</p>
                    </div>

                    <div className='spreadsheet-detail'>
                      <strong>Problema identificado</strong>
                      <p>{problem}</p>
                    </div>

                    <div className='spreadsheet-detail'>
                      <strong>Solução proposta</strong>
                      <p>{solution}</p>
                    </div>
                  </div>

                  <div className='tags'>
                    {tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    className='spreadsheet-download'
                    href={`/planilhas/${file}`}
                    download
                  >
                    Baixar planilha <ArrowDown size={15} />
                  </a>
                </article>
              ),
            )}
          </div>

          <p className='project-note'>
            Os arquivos incluem dados fictícios de demonstração quando
            aplicável. Substitua-os por informações reais antes de utilizar. Os
            modelos são demonstrativos e não substituem validação profissional
            ou obrigações contábeis oficiais.
          </p>
        </section>

        <section className='section education-section' id='formacao'>
          <div className='section-heading'>
            <span className='section-index'>05 / FORMAÇÃO E EXPERIÊNCIA</span>
            <h2>
              Uma trajetória entre{' '}
              <span className='accent-text'>gestão e tecnologia.</span>
            </h2>
            <p className='section-subtitle'>
              Formação acadêmica, experiência profissional e cursos
              complementares conforme meu currículo.
            </p>
          </div>
          <div className='timeline'>
            <div className='timeline-item'>
              <span className='timeline-marker' />
              <div className='timeline-date'>EM ANDAMENTO</div>
              <div className='timeline-content'>
                <div className='timeline-title'>
                  <h3>Bacharelado em Ciência da Computação</h3>
                  <span className='timeline-tag'>Gran Faculdade</span>
                </div>
                <p>Formação superior em andamento.</p>
              </div>
            </div>
            <div className='timeline-item'>
              <span className='timeline-marker' />
              <div className='timeline-date'>EM ANDAMENTO</div>
              <div className='timeline-content'>
                <div className='timeline-title'>
                  <h3>Bacharelado em Administração</h3>
                  <span className='timeline-tag'>Gran Faculdade</span>
                </div>
                <p>Formação superior em andamento.</p>
              </div>
            </div>
            <div className='timeline-item'>
              <span className='timeline-marker' />
              <div className='timeline-date'>EM ANDAMENTO</div>
              <div className='timeline-content'>
                <div className='timeline-title'>
                  <h3>Bacharelado em Ciências Contábeis</h3>
                  <span className='timeline-tag'>Gran Faculdade</span>
                </div>
                <p>Formação superior em andamento.</p>
              </div>
            </div>
            <div className='timeline-item'>
              <span className='timeline-marker' />
              <div className='timeline-date'>TRANCADO</div>
              <div className='timeline-content'>
                <div className='timeline-title'>
                  <h3>Licenciatura em Matemática</h3>
                  <span className='timeline-tag muted-tag'>IFCE</span>
                </div>
                <p>
                  Graduação cursada no Instituto Federal do Ceará (IFCE),
                  atualmente trancada.
                </p>
              </div>
            </div>
          </div>
          <div className='section-heading course-heading'>
            <span className='section-index'>CURSOS COMPLEMENTARES</span>
            <h2>
              Aprendizado <span className='accent-text'>contínuo.</span>
            </h2>
          </div>
          <div className='course-grid'>
            {courses.map(([name, institution, status]) => (
              <article className='course-card' key={name}>
                <div>
                  <strong>{name}</strong>
                  <p>{institution}</p>
                </div>
                <span
                  className={
                    status === 'Concluído'
                      ? 'timeline-tag'
                      : 'timeline-tag muted-tag'
                  }
                >
                  {status}
                </span>
              </article>
            ))}
          </div>
          <div className='section-heading experience-heading'>
            <span className='section-index'>EXPERIÊNCIA</span>
            <h2>
              Atuação em{' '}
              <span className='accent-text'>gestão administrativa.</span>
            </h2>
          </div>
          <div className='experience-note'>
            <BriefcaseBusiness size={20} />
            <div>
              <strong>Colaborador em Gestão Administrativa · POTIFCE</strong>
              <p>
                Experiência concluída com apoio à gestão de cadastros e ao
                acompanhamento de inscritos em programa educacional; organização
                e atualização de documentos e planilhas; suporte operacional e
                atendimento a estudantes e professores.
              </p>
            </div>
          </div>
        </section>

        <section className='contact-section' id='contato'>
          <div className='contact-inner'>
            <span className='section-index'>06 / CONTATO</span>
            <h2>
              Vamos construir algo <span className='accent-text'>juntos?</span>
            </h2>
            <p>
              Estou aberto a oportunidades de estágio, projetos colaborativos e
              conversas sobre tecnologia.
            </p>
            <div className='contact-grid'>
              <div className='contact-info'>
                <a
                  className='contact-method'
                  href='https://mail.google.com/mail/?view=cm&fs=1&to=Oliveira.santos62%40aluno.ifce.edu.br'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>
                    <Mail />
                  </span>
                  <div>
                    <small>E-MAIL · ABRIR NO GMAIL</small>
                    <strong>Oliveira.santos62@aluno.ifce.edu.br</strong>
                  </div>
                  <ArrowUpRight />
                </a>
                <a
                  className='contact-method'
                  href='https://wa.me/5585992003212'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>
                    <Send />
                  </span>
                  <div>
                    <small>WHATSAPP · ENVIAR MENSAGEM</small>
                    <strong>(85) 99200-3212</strong>
                  </div>
                  <ArrowUpRight />
                </a>
                <a
                  className='contact-method'
                  href='https://portfolio-gabriel3-d89b.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>
                    <ExternalLink />
                  </span>
                  <div>
                    <small>PORTFÓLIO</small>
                    <strong>portfolio-gabriel3-d89b.vercel.app</strong>
                  </div>
                  <ArrowUpRight />
                </a>
              </div>
              <form className='contact-form' onSubmit={submitContact}>
                <label>
                  Seu nome
                  <input
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    placeholder='Como posso te chamar?'
                  />
                </label>
                <label>
                  Seu e-mail
                  <input
                    required
                    type='email'
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder='voce@email.com'
                  />
                </label>
                <label>
                  Mensagem
                  <textarea
                    required
                    rows='4'
                    value={form.mensagem}
                    onChange={(e) =>
                      setForm({ ...form, mensagem: e.target.value })
                    }
                    placeholder='Conte um pouco sobre o que você tem em mente...'
                  />
                </label>
                <button className='button submit-button' type='submit'>
                  Enviar mensagem <Send size={16} />
                </button>
                {sent && (
                  <span className='form-feedback'>
                    <CheckCircle2 size={15} /> O Gmail será aberto com a
                    mensagem preenchida. Revise e envie por lá.
                  </span>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <a className='brand' href='#inicio'>
          <span className='brand-mark'>
            G<span>.</span>
          </span>
          <span>
            gabriel<span className='brand-muted'>.dev</span>
          </span>
        </a>
        <span>Desenvolvido com React · {new Date().getFullYear()}</span>
        <a href='#inicio' className='back-top'>
          Voltar ao topo ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
