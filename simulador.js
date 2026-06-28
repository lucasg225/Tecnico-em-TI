/* ==========================================================
   SIMULADOR DE CARREIRA - WHAY HELP
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {
    /* ===========================
       PERFIS PROFISSIONAIS
    =========================== */

    const perfis = {
        dev: {
            icone: "💻",
            nome: "Desenvolvedor Full Stack",
            salario: {
                estagio: "R$ 1.500 a R$ 2.500",
                junior: "R$ 4.500 a R$ 6.500",
                pleno: "R$ 7.500 a R$ 10.000",
                senior: "R$ 12.000 a R$ 18.000+"
            },
            tecnologias: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git", "SQL"],
            certificacoes: ["AWS Cloud Practitioner", "Microsoft AZ-900", "Oracle Java"],
            empresas: ["Google", "Microsoft", "Nubank", "TOTVS", "iFood"],
            passos: [
                "Estudar lógica de programação",
                "Aprender HTML e CSS",
                "Dominar JavaScript",
                "Aprender React",
                "Estudar Node.js",
                "Banco de Dados",
                "Criar projetos para portfólio"
            ],
            caracteristicas: ["Criativo", "Analítico", "Persistente", "Gosta de resolver problemas"]
        },

        seguranca: {
            icone: "🔐",
            nome: "Especialista em Cibersegurança",
            salario: {
                estagio: "R$ 1.600 a R$ 2.500",
                junior: "R$ 5.000 a R$ 7.000",
                pleno: "R$ 8.000 a R$ 12.000",
                senior: "R$ 15.000+"
            },
            tecnologias: ["Linux", "Python", "Kali Linux", "Wireshark", "Metasploit"],
            certificacoes: ["Security+", "CEH", "CompTIA"],
            empresas: ["Banco do Brasil", "IBM", "Cisco", "Accenture"],
            passos: ["Aprender Redes", "Aprender Linux", "Estudar Segurança", "Pentest", "Cloud Security"],
            caracteristicas: ["Observador", "Paciente", "Analítico", "Responsável"]
        },

        cloud: {
            icone: "☁️",
            nome: "Engenheiro de Cloud",
            salario: {
                estagio: "R$ 1.800 a R$ 2.800",
                junior: "R$ 5.500 a R$ 8.000",
                pleno: "R$ 9.000 a R$ 13.000",
                senior: "R$ 15.000 a R$ 22.000+"
            },
            tecnologias: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
            certificacoes: ["AWS Cloud Practitioner", "AWS Solutions Architect", "Microsoft AZ-104"],
            empresas: ["Amazon", "Microsoft", "Google", "IBM"],
            passos: ["Aprender Redes", "Linux", "Virtualização", "Docker", "Cloud"],
            caracteristicas: ["Organizado", "Analítico", "Curioso", "Proativo"]
        },

        dados: {
            icone: "📊",
            nome: "Cientista de Dados",
            salario: {
                estagio: "R$ 1.700 a R$ 2.500",
                junior: "R$ 5.000 a R$ 7.500",
                pleno: "R$ 8.000 a R$ 12.000",
                senior: "R$ 15.000+"
            },
            tecnologias: ["Python", "SQL", "Power BI", "Pandas", "Excel"],
            certificacoes: ["Google Data Analytics", "Microsoft DP-900"],
            empresas: ["Google", "Nubank", "Mercado Livre"],
            passos: ["Estudar Estatística", "Aprender Python", "Dominar SQL", "Machine Learning"],
            caracteristicas: ["Lógico", "Analítico", "Paciente", "Detalhista"]
        },

        redes: {
            icone: "🌐",
            nome: "Administrador de Redes",
            salario: {
                estagio: "R$ 1.500 a R$ 2.200",
                junior: "R$ 4.000 a R$ 6.000",
                pleno: "R$ 7.000 a R$ 9.000",
                senior: "R$ 12.000+"
            },
            tecnologias: ["Cisco", "Linux", "TCP/IP", "Firewall"],
            certificacoes: ["CCNA", "Network+"],
            empresas: ["Cisco", "Claro", "Vivo"],
            passos: ["Aprender Redes", "Linux", "Roteadores", "Segurança"],
            caracteristicas: ["Paciente", "Organizado", "Responsável"]
        },

        ia: {
            icone: "🤖",
            nome: "Engenheiro de Inteligência Artificial",
            salario: {
                estagio: "R$ 2.000",
                junior: "R$ 6.000 a R$ 8.500",
                pleno: "R$ 10.000 a R$ 15.000",
                senior: "R$ 18.000+"
            },
            tecnologias: ["Python", "TensorFlow", "PyTorch", "Machine Learning"],
            certificacoes: ["Google AI", "Azure AI"],
            empresas: ["OpenAI", "Google", "Meta"],
            passos: ["Aprender Python", "Matemática", "Machine Learning", "Deep Learning"],
            caracteristicas: ["Muito analítico", "Curioso", "Criativo"]
        },

        design: {
            icone: "🎨",
            nome: "UX/UI Designer",
            salario: {
                estagio: "R$ 1.500",
                junior: "R$ 4.000",
                pleno: "R$ 7.000",
                senior: "R$ 12.000+"
            },
            tecnologias: ["Figma", "Adobe XD", "Photoshop"],
            certificacoes: ["Google UX Design"],
            empresas: ["Nubank", "iFood", "PicPay"],
            passos: ["UX", "UI", "Figma", "Prototipação"],
            caracteristicas: ["Criativo", "Empático", "Observador"]
        },

        suporte: {
            icone: "🛠️",
            nome: "Analista de Suporte",
            salario: {
                estagio: "R$ 1.300",
                junior: "R$ 3.500",
                pleno: "R$ 5.500",
                senior: "R$ 8.500+"
            },
            tecnologias: ["Windows", "Linux", "Office", "Hardware"],
            certificacoes: ["ITIL", "CompTIA A+"],
            empresas: ["TOTVS", "Dell", "Positivo"],
            passos: ["Hardware", "Redes", "Windows", "Linux"],
            caracteristicas: ["Comunicativo", "Paciente", "Prestativo"]
        }
    };

    /* ===========================
       PERGUNTAS
    =========================== */

    const perguntas = [
        {
            pergunta: "O que mais desperta seu interesse na tecnologia?",
            respostas: [
                { texto: "💻 Criar sites e aplicativos", pontos: { dev: 3, design: 1 } },
                { texto: "🔐 Proteger sistemas contra ataques", pontos: { seguranca: 3, redes: 1 } },
                { texto: "📊 Trabalhar com dados", pontos: { dados: 3, ia: 1 } },
                { texto: "☁️ Trabalhar com servidores e nuvem", pontos: { cloud: 3, redes: 1 } }
            ]
        },
        {
            pergunta: "Qual atividade você prefere?",
            respostas: [
                { texto: "Resolver problemas", pontos: { dev: 2, seguranca: 2, ia: 2 } },
                { texto: "Ajudar pessoas", pontos: { suporte: 3 } },
                { texto: "Criar interfaces bonitas", pontos: { design: 3 } },
                { texto: "Organizar informações", pontos: { dados: 2, cloud: 2 } }
            ]
        },
        {
            pergunta: "Qual matéria você mais gosta?",
            respostas: [
                { texto: "Matemática", pontos: { ia: 3, dados: 2 } },
                { texto: "Informática", pontos: { dev: 3 } },
                { texto: "Artes", pontos: { design: 3 } },
                { texto: "Física", pontos: { cloud: 2, redes: 2 } }
            ]
        },
        {
            pergunta: "Como você prefere trabalhar?",
            respostas: [
                { texto: "Criando soluções", pontos: { dev: 2, design: 2 } },
                { texto: "Investigando problemas", pontos: { seguranca: 3 } },
                { texto: "Analisando dados", pontos: { dados: 3 } },
                { texto: "Configurando equipamentos", pontos: { redes: 3, suporte: 2 } }
            ]
        },
        {
            pergunta: "Qual ferramenta gostaria de aprender primeiro?",
            respostas: [
                { texto: "Visual Studio Code", pontos: { dev: 3 } },
                { texto: "Figma", pontos: { design: 3 } },
                { texto: "Power BI", pontos: { dados: 3 } },
                { texto: "Cisco Packet Tracer", pontos: { redes: 3 } }
            ]
        },
        {
            pergunta: "Qual ambiente parece mais interessante?",
            respostas: [
                { texto: "Startup", pontos: { dev: 2, design: 2 } },
                { texto: "Centro de operações", pontos: { seguranca: 3 } },
                { texto: "Laboratório de IA", pontos: { ia: 3 } },
                { texto: "Data Center", pontos: { cloud: 3 } }
            ]
        },
        {
            pergunta: "Você gosta de programação?",
            respostas: [
                { texto: "Muito", pontos: { dev: 3, ia: 2, cloud: 1 } },
                { texto: "Um pouco", pontos: { dados: 2 } },
                { texto: "Prefiro infraestrutura", pontos: { redes: 2, suporte: 2 } },
                { texto: "Prefiro design", pontos: { design: 3 } }
            ]
        },
        {
            pergunta: "Qual profissão chamou mais sua atenção até agora?",
            respostas: [
                { texto: "Desenvolvedor", pontos: { dev: 3 } },
                { texto: "Especialista em Segurança", pontos: { seguranca: 3 } },
                { texto: "Engenheiro de Cloud", pontos: { cloud: 3 } },
                { texto: "Cientista de Dados", pontos: { dados: 3 } }
            ]
        }
    ];

    /* ===========================
       VARIÁVEIS
    =========================== */

    let indice = 0;
    const pontuacoes = {
        dev: 0,
        seguranca: 0,
        cloud: 0,
        dados: 0,
        redes: 0,
        ia: 0,
        design: 0,
        suporte: 0
    };

    const btnComecar = document.getElementById("btnComecar");
    const perguntaEl = document.getElementById("pergunta");
    const respostasEl = document.getElementById("respostas");
    const contadorEl = document.getElementById("contador");
    const progressoEl = document.getElementById("progresso");
    const resultadoEl = document.getElementById("resultado");
    const anoEl = document.getElementById("ano");

    if (anoEl) {
        anoEl.textContent = new Date().getFullYear();
    }

    if (!btnComecar || !perguntaEl || !respostasEl || !contadorEl || !progressoEl || !resultadoEl) {
        return;
    }

    btnComecar.addEventListener("click", iniciarSimulador);

    function iniciarSimulador() {
        indice = 0;

        for (const chave in pontuacoes) {
            pontuacoes[chave] = 0;
        }

        document.querySelector(".simulador").style.display = "flex";
        resultadoEl.style.display = "none";
        btnComecar.style.display = "none";

        mostrarPergunta();
    }

    function mostrarPergunta() {
        const atual = perguntas[indice];

        perguntaEl.textContent = atual.pergunta;
        contadorEl.textContent = `Pergunta ${indice + 1} de ${perguntas.length}`;
        progressoEl.style.width = `${((indice + 1) / perguntas.length) * 100}%`;
        respostasEl.innerHTML = "";

        atual.respostas.forEach((resposta) => {
            const botao = document.createElement("button");
            botao.className = "opcao";
            botao.type = "button";
            botao.textContent = resposta.texto;
            botao.addEventListener("click", () => responder(botao, resposta));
            respostasEl.appendChild(botao);
        });
    }

    function responder(botao, resposta) {
        respostasEl.querySelectorAll("button").forEach((el) => {
            el.disabled = true;
            el.style.pointerEvents = "none";
        });

        botao.style.transform = "scale(0.98)";
        botao.style.opacity = "0.92";

        for (const area in resposta.pontos) {
            pontuacoes[area] += resposta.pontos[area];
        }

        setTimeout(() => {
            indice++;

            if (indice < perguntas.length) {
                mostrarPergunta();
            } else {
                gerarResultado();
            }
        }, 250);
    }

    function gerarResultado() {
        document.querySelector(".simulador").style.display = "none";
        resultadoEl.style.display = "block";

        const ranking = Object.entries(pontuacoes).sort((a, b) => b[1] - a[1]);
        const vencedor = ranking[0][0];

        preencherResultado(perfis[vencedor], ranking);
    }

    function preencherResultado(perfil, ranking) {
        document.getElementById("iconePerfil").textContent = perfil.icone;
        document.getElementById("perfil").textContent = perfil.nome;

        const maior = ranking[0][1];
        const pontuacaoMaxima = perguntas.length * 3;
        const porcentagem = Math.round((maior / pontuacaoMaxima) * 100);

        const barra = document.getElementById("compatibilidade");
        barra.style.width = `${porcentagem}%`;

        if (porcentagem >= 80) {
            barra.style.background = "linear-gradient(90deg,#00c853,#69f0ae)";
        } else if (porcentagem >= 60) {
            barra.style.background = "linear-gradient(90deg,#ffd600,#ffea00)";
        } else {
            barra.style.background = "linear-gradient(90deg,#ff5252,#ff1744)";
        }

        const texto = document.getElementById("porcentagem");
        texto.textContent = `Compatibilidade: ${porcentagem}%`;

        preencherRanking(ranking);
        preencherEstatisticas(perfil, porcentagem);
        preencherInformacoes(perfil);
    }

    function preencherRanking(ranking) {
        const rankingTop3 = document.getElementById("rankingTop3");
        rankingTop3.innerHTML = "";

        const medalhas = ["🥇", "🥈", "🥉"];

        ranking.slice(0, 3).forEach((item, index) => {
            const perfil = perfis[item[0]];
            const pontos = item[1];
            const pct = Math.round((pontos / (perguntas.length * 3)) * 100);

            rankingTop3.innerHTML += `
                <div class="ranking-card">
                    <div class="ranking-esquerda">
                        <span class="ranking-posicao">${medalhas[index]}</span>
                        <span class="ranking-nome">${perfil.icone} ${perfil.nome}</span>
                    </div>
                    <span class="ranking-pontos">${pct}%</span>
                </div>
            `;
        });
    }

    function preencherEstatisticas(perfil, porcentagem) {
        document.getElementById("estatisticas").innerHTML = `
            <div class="card-estatistica">
                <span>🏆</span>
                <h4>Ranking</h4>
                <p>1º Lugar</p>
            </div>

            <div class="card-estatistica">
                <span>📊</span>
                <h4>Compatibilidade</h4>
                <p>${porcentagem}%</p>
            </div>

            <div class="card-estatistica">
                <span>💼</span>
                <h4>Área</h4>
                <p>${perfil.nome}</p>
            </div>

            <div class="card-estatistica">
                <span>🛠️</span>
                <h4>Tecnologias</h4>
                <p>${perfil.tecnologias.length}</p>
            </div>
        `;
    }

    function preencherInformacoes(perfil) {
        document.getElementById("informacoes").innerHTML = `
            <h3>💰 Faixa Salarial</h3>
            <ul class="lista">
                <li><strong>Estágio:</strong> ${perfil.salario.estagio}</li>
                <li><strong>Júnior:</strong> ${perfil.salario.junior}</li>
                <li><strong>Pleno:</strong> ${perfil.salario.pleno}</li>
                <li><strong>Sênior:</strong> ${perfil.salario.senior}</li>
            </ul>

            <h3>🛠 Tecnologias</h3>
            <ul class="lista">
                ${perfil.tecnologias.map(item => `<li>${item}</li>`).join("")}
            </ul>

            <h3>📚 Certificações</h3>
            <ul class="lista">
                ${perfil.certificacoes.map(item => `<li>${item}</li>`).join("")}
            </ul>

            <h3>🏢 Empresas</h3>
            <ul class="lista">
                ${perfil.empresas.map(item => `<li>${item}</li>`).join("")}
            </ul>

            <h3>🎯 Próximos Passos</h3>
            <ul class="lista">
                ${perfil.passos.map(item => `<li>${item}</li>`).join("")}
            </ul>

            <h3>⭐ Perfil Profissional</h3>
            <ul class="lista">
                ${perfil.caracteristicas.map(item => `<li>${item}</li>`).join("")}
            </ul>
        `;
    }
});
