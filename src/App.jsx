import { useMemo, useState } from 'react';
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Moon, Sun,
  Code2, Database, Monitor, Smartphone, ExternalLink, GraduationCap,
  BriefcaseBusiness, FolderGit2, Send, CheckCircle2, MapPin
} from 'lucide-react';

const projects = [
  {
    title: 'Meu Assistente', category: 'Aplicação web', status: 'Projeto pessoal',
    description: 'Plataforma web de organização e gestão pessoal, com módulos integrados para tarefas, hábitos, estudos, projetos, calendário e acompanhamento de objetivos. Projeto com publicação e hospedagem via Vercel.',
    stack: ['React', 'JavaScript', 'Node.js', 'Vercel'],
    icon: Monitor, accent: 'violet',
    link: '', github: '',
  },
  {
    title: 'Nexus Tech', category: 'E-commerce', status: 'Projeto acadêmico',
    description: 'Loja virtual desenvolvida como projeto prático, com catálogo de produtos, páginas de detalhes, carrinho e navegação entre rotas.',
    stack: ['React', 'JavaScript', 'CSS', 'Vercel'],
    icon: Smartphone, accent: 'cyan',
    link: 'https://nexus-tech-nu.vercel.app/', github: '',
  },
  {
    title: 'Grafos e Algoritmos', category: 'Iniciação científica', status: 'Iniciação científica',
    description: 'Estudo e implementação de conceitos de grafos, algoritmos e estruturas de dados, com foco em raciocínio computacional e resolução de problemas.',
    stack: ['Python', 'Grafos', 'Algoritmos', 'Estruturas de dados'],
    icon: Database, accent: 'orange',
    link: '', github: '',
  },
  {
    title: 'Análise e Modelagem de Dados', category: 'Dados', status: 'Projeto prático',
    description: 'Utilização de Python para tratamento, exploração e análise de dados, organizando informações para apoiar a interpretação de resultados e a tomada de decisão.',
    stack: ['Python', 'Análise de dados', 'Modelagem'],
    icon: Database, accent: 'cyan',
    link: '', github: '',
  },
];

const skills = [
  { name: 'JavaScript', level: 'Conhecimento em desenvolvimento', group: 'Programação', icon: Code2 },
  { name: 'Java', level: 'Conhecimento em desenvolvimento', group: 'Programação', icon: Code2 },
  { name: 'Kotlin', level: 'Conhecimento em desenvolvimento', group: 'Programação', icon: Code2 },
  { name: 'HTML e CSS', level: 'Desenvolvimento web', group: 'Web', icon: Monitor },
  { name: 'Python', level: 'Tratamento e análise de dados', group: 'Dados', icon: Code2 },
  { name: 'Grafos e algoritmos', level: 'Estudos e implementação', group: 'Computação', icon: Database },
  { name: 'Estruturas de dados', level: 'Fundamentos', group: 'Computação', icon: Database },
  { name: 'Excel avançado', level: 'Planilhas e análise', group: 'Produtividade', icon: Monitor },
  { name: 'Android Studio', level: 'Desenvolvimento Android', group: 'Ferramentas', icon: Smartphone },
  { name: 'Jetpack Compose', level: 'Interfaces Android', group: 'Ferramentas', icon: Smartphone },
  { name: 'Word e PowerPoint', level: 'Documentação e apresentações', group: 'Produtividade', icon: Monitor },
  { name: 'Relatórios e dashboards', level: 'Organização e apresentação de dados', group: 'Dados', icon: Database },
];

const courses = [
  ['Bootcamp de Ciência de Dados', 'Avanti', 'Concluído'],
  ['Curso de Administração e Contabilidade', 'Formação complementar', 'Concluído'],
  ['Bootcamp de JavaScript', 'Formação complementar', 'Em andamento'],
  ['Excel Avançado', 'Hashtag Treinamentos', 'Em andamento'],
  ['Desenvolvimento Android com Android Studio e Kotlin', 'Formação complementar', 'Em andamento'],
  ['Trilha NoCode/IA e Especialização em Soft Skills', 'Formação complementar', 'Em andamento'],
];

const nav = [ ['Início', 'inicio'], ['Sobre', 'sobre'], ['Habilidades', 'habilidades'], ['Projetos', 'projetos'], ['Formação', 'formacao'], ['Contato', 'contato'] ];

function App() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') !== 'light'; } catch { return true; }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('Todos');
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [sent, setSent] = useState(false);
  const filters = ['Todos', 'Aplicação web', 'E-commerce', 'Iniciação científica', 'Dados'];
  const visibleProjects = useMemo(() => filter === 'Todos' ? projects : projects.filter(p => p.category === filter), [filter]);

  const toggleTheme = () => setDark(current => {
    const next = !current;
    try { localStorage.setItem('portfolio-theme', next ? 'dark' : 'light'); } catch {}
    return next;
  });

  const submitContact = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato pelo portfólio — ${form.nome}`);
    const body = encodeURIComponent(`Nome: ${form.nome}\nE-mail: ${form.email}\n\n${form.mensagem}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=Oliveira.santos62%40aluno.ifce.edu.br&su=${subject}&body=${body}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <div className={dark ? 'app dark' : 'app light'}>
      <header className="header">
        <a className="brand" href="#inicio" aria-label="Ir para o início"><span className="brand-mark">G<span>.</span></span><span>gabriel<span className="brand-muted">.dev</span></span></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"} title={dark ? "Ativar modo claro" : "Ativar modo escuro"}>{dark ? <><Sun size={17}/> <span>Modo claro</span></> : <><Moon size={17}/> <span>Modo escuro</span></>}</button>
          <a className="button button-small header-cta" href="#contato">Vamos conversar <ArrowUpRight size={15}/></a>
          <button className="icon-btn menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <main>
        <section className="hero section" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> DISPONÍVEL PARA OPORTUNIDADES</div>
            <p className="hero-kicker">Olá, meu nome é</p>
            <h1>Gabriel <span>Oliveira.</span></h1>
            <h2>Estudante de Computação e Administração <span className="accent-text"> | Tecnologia e dados.</span></h2>
            <p className="hero-description">Estudante de Ciência da Computação e Administração, com experiência em apoio à gestão administrativa e interesse em tecnologia, desenvolvimento de sistemas, dados e melhoria de processos.</p>
            <div className="hero-actions"><a className="button" href="#projetos">Explorar projetos <ArrowUpRight size={17}/></a><a className="button button-ghost" href="/curriculo-gabriel-oliveira.pdf" target="_blank" rel="noreferrer">Ver currículo <ArrowDown size={16}/></a></div>
            <div className="socials"><a href="https://portfolio-gabriel3-d89b.vercel.app/" target="_blank" rel="noreferrer"><ExternalLink size={16}/> Meu portfólio</a><span><MapPin size={16}/> Fortaleza, CE</span></div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="code-card"><div className="code-top"><div className="window-dots"><i/><i/><i/></div><span>developer.js</span><span className="code-live">●</span></div><div className="code-content"><div><span className="line-no">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div><div><span className="line-no">02</span>&nbsp; name: <span className="code-green">'Gabriel'</span>,</div><div><span className="line-no">03</span>&nbsp; focus: <span className="code-green">'Web development'</span>,</div><div><span className="line-no">04</span>&nbsp; learning: [</div><div><span className="line-no">05</span>&nbsp;&nbsp; <span className="code-orange">'React'</span>, <span className="code-orange">'JavaScript'</span>,</div><div><span className="line-no">06</span>&nbsp;&nbsp; <span className="code-orange">'Python'</span>, <span className="code-orange">'SQL'</span></div><div><span className="line-no">07</span>&nbsp; ],</div><div><span className="line-no">08</span>&nbsp; mindset: <span className="code-green">'Always learning'</span></div><div><span className="line-no">09</span>{'}'};</div><div className="code-cursor">▍</div></div></div>
            <div className="floating-chip chip-react"><span>⚛</span> React</div><div className="floating-chip chip-js"><span>JS</span> JavaScript</div><div className="floating-chip chip-python"><span>Py</span> Python</div>
            <div className="hero-glow"/>
          </div>
          <a href="#sobre" className="scroll-hint"><ArrowDown size={15}/> Role para conhecer</a>
        </section>

        <section className="section about-section" id="sobre">
          <div className="section-heading"><span className="section-index">01 / SOBRE</span><h2>Curiosidade que vira <span className="accent-text">construção.</span></h2></div>
          <div className="about-grid"><div className="about-lead"><p className="large-copy">Sou um estudante interessado em tecnologia, programação e resolução de problemas.</p><p>Minha trajetória reúne estudos em computação, administração e contabilidade, além de experiência em atividades de apoio à gestão administrativa. Participei de Iniciação Científica na área de Grafos e Algoritmos e desenvolvo projetos práticos em programação e análise de dados.</p><p>Tenho perfil organizado e analítico, facilidade para aprender ferramentas e interesse em aplicar tecnologia para melhorar processos e apoiar a tomada de decisão.</p><a className="text-link" href="#contato">Conheça minha trajetória <ArrowUpRight size={16}/></a></div><div className="about-facts"><div className="fact-card"><span className="fact-icon"><Code2/></span><strong>Aprender fazendo</strong><p>Projetos práticos como parte do processo de evolução.</p></div><div className="fact-card"><span className="fact-icon"><Database/></span><strong>Pensamento analítico</strong><p>Interesse por lógica, dados e resolução estruturada de problemas.</p></div><div className="fact-card"><span className="fact-icon"><BriefcaseBusiness/></span><strong>Visão profissional</strong><p>Organização, responsabilidade e vontade de contribuir em equipe.</p></div><div className="fact-card"><span className="fact-icon"><GraduationCap/></span><strong>Aprendizado contínuo</strong><p>Construindo uma base técnica sólida, passo a passo.</p></div></div></div>
        </section>

        <section className="section skills-section" id="habilidades">
          <div className="section-heading"><span className="section-index">02 / HABILIDADES</span><h2>Ferramentas que estou <span className="accent-text">desenvolvendo.</span></h2><p className="section-subtitle">Uma visão honesta das tecnologias e áreas que fazem parte dos meus estudos.</p></div>
          <div className="skills-grid">{skills.map(({name, level, group, icon: Icon}) => <article className="skill-card" key={name}><div className="skill-card-top"><span className="skill-icon"><Icon size={19}/></span><span className="skill-group">{group}</span></div><h3>{name}</h3><p>{level}</p></article>)}</div>
          <div className="learning-strip"><span className="learning-pulse"/><div><strong>Em constante evolução</strong><p>JavaScript, Java, Kotlin, Python, desenvolvimento web, Android e análise de dados.</p></div></div>
        </section>

        <section className="section projects-section" id="projetos">
          <div className="section-heading projects-heading"><div><span className="section-index">03 / PROJETOS</span><h2>Ideias colocadas em <span className="accent-text">prática.</span></h2><p className="section-subtitle">Projetos pessoais, acadêmicos e experiências de iniciação científica.</p></div><span className="project-count">0{projects.length} <small>PROJETOS</small></span></div>
          <div className="filters">{filters.map(f => <button key={f} className={filter === f ? 'filter active' : 'filter'} onClick={() => setFilter(f)}>{f}</button>)}</div>
          <div className="projects-grid">{visibleProjects.map((project, i) => { const Icon = project.icon; return <article className={`project-card ${project.accent}`} key={project.title}><div className="project-art"><div className="project-art-grid"/><div className="project-icon"><Icon size={34}/></div><span className="project-number">0{i+1}</span><span className="project-art-label">{project.category}</span></div><div className="project-body"><div className="project-meta"><span>{project.status}</span><span className="project-dot"/></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.map(t => <span key={t}>{t}</span>)}</div><div className="project-links">{project.link ? <a href={project.link} target="_blank" rel="noreferrer">Ver projeto <ExternalLink size={15}/></a> : <span className="private-label">Projeto em desenvolvimento</span>}{project.github && <a href={project.github} target="_blank" rel="noreferrer">Código <Github size={15}/></a>}</div></div></article> })}</div>
          <p className="project-note">* Os projetos sem link público estão apresentados como trabalhos em desenvolvimento ou estudos. Os links de repositório podem ser adicionados quando publicados.</p>
        </section>

        <section className="section education-section" id="formacao">
          <div className="section-heading"><span className="section-index">04 / FORMAÇÃO E EXPERIÊNCIA</span><h2>Uma trajetória entre <span className="accent-text">gestão e tecnologia.</span></h2><p className="section-subtitle">Formação acadêmica, experiência profissional e cursos complementares conforme meu currículo.</p></div>
          <div className="timeline">
            <div className="timeline-item"><span className="timeline-marker"/><div className="timeline-date">EM ANDAMENTO</div><div className="timeline-content"><div className="timeline-title"><h3>Bacharelado em Ciência da Computação</h3><span className="timeline-tag">Gran Faculdade</span></div><p>Formação superior em andamento.</p></div></div>
            <div className="timeline-item"><span className="timeline-marker"/><div className="timeline-date">EM ANDAMENTO</div><div className="timeline-content"><div className="timeline-title"><h3>Bacharelado em Administração</h3><span className="timeline-tag">Gran Faculdade</span></div><p>Formação superior em andamento.</p></div></div>
            <div className="timeline-item"><span className="timeline-marker"/><div className="timeline-date">EM ANDAMENTO</div><div className="timeline-content"><div className="timeline-title"><h3>Bacharelado em Ciências Contábeis</h3><span className="timeline-tag">Gran Faculdade</span></div><p>Formação superior em andamento.</p></div></div>
            <div className="timeline-item"><span className="timeline-marker"/><div className="timeline-date">TRANCADO</div><div className="timeline-content"><div className="timeline-title"><h3>Licenciatura em Matemática</h3><span className="timeline-tag muted-tag">IFCE</span></div><p>Graduação cursada no Instituto Federal do Ceará (IFCE), atualmente trancada.</p></div></div>
          </div>
          <div className="section-heading course-heading"><span className="section-index">CURSOS COMPLEMENTARES</span><h2>Aprendizado <span className="accent-text">contínuo.</span></h2></div>
          <div className="course-grid">{courses.map(([name, institution, status]) => <article className="course-card" key={name}><div><strong>{name}</strong><p>{institution}</p></div><span className={status === 'Concluído' ? 'timeline-tag' : 'timeline-tag muted-tag'}>{status}</span></article>)}</div>
          <div className="section-heading experience-heading"><span className="section-index">EXPERIÊNCIA</span><h2>Atuação em <span className="accent-text">gestão administrativa.</span></h2></div>
          <div className="experience-note"><BriefcaseBusiness size={20}/><div><strong>Colaborador em Gestão Administrativa · POTIFCE</strong><p>Experiência concluída com apoio à gestão de cadastros e ao acompanhamento de inscritos em programa educacional; organização e atualização de documentos e planilhas; suporte operacional e atendimento a estudantes e professores.</p></div></div>
        </section>

        <section className="contact-section" id="contato"><div className="contact-inner"><span className="section-index">05 / CONTATO</span><h2>Vamos construir algo <span className="accent-text">juntos?</span></h2><p>Estou aberto a oportunidades de estágio, projetos colaborativos e conversas sobre tecnologia.</p><div className="contact-grid"><div className="contact-info"><a className="contact-method" href="https://mail.google.com/mail/?view=cm&fs=1&to=Oliveira.santos62%40aluno.ifce.edu.br" target="_blank" rel="noreferrer"><span><Mail/></span><div><small>E-MAIL · ABRIR NO GMAIL</small><strong>Oliveira.santos62@aluno.ifce.edu.br</strong></div><ArrowUpRight/></a><a className="contact-method" href="https://wa.me/5585992003212" target="_blank" rel="noreferrer"><span><Send/></span><div><small>WHATSAPP · ENVIAR MENSAGEM</small><strong>(85) 99200-3212</strong></div><ArrowUpRight/></a><a className="contact-method" href="https://portfolio-gabriel3-d89b.vercel.app/" target="_blank" rel="noreferrer"><span><ExternalLink/></span><div><small>PORTFÓLIO</small><strong>portfolio-gabriel3-d89b.vercel.app</strong></div><ArrowUpRight/></a></div><form className="contact-form" onSubmit={submitContact}><label>Seu nome<input required value={form.nome} onChange={e=>setForm({...form,nome:e.target.value})} placeholder="Como posso te chamar?"/></label><label>Seu e-mail<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="voce@email.com"/></label><label>Mensagem<textarea required rows="4" value={form.mensagem} onChange={e=>setForm({...form,mensagem:e.target.value})} placeholder="Conte um pouco sobre o que você tem em mente..."/></label><button className="button submit-button" type="submit">Enviar mensagem <Send size={16}/></button>{sent && <span className="form-feedback"><CheckCircle2 size={15}/> O Gmail será aberto com a mensagem preenchida. Revise e envie por lá.</span>}</form></div></div></section>
      </main>
      <footer className="footer"><a className="brand" href="#inicio"><span className="brand-mark">G<span>.</span></span><span>gabriel<span className="brand-muted">.dev</span></span></a><span>Desenvolvido com React · {new Date().getFullYear()}</span><a href="#inicio" className="back-top">Voltar ao topo ↑</a></footer>
    </div>
  );
}

export default App;
