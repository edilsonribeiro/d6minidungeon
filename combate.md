# ⚔ Combate

O combate segue a mesma regra do núcleo: **sempre o jogador rola** (player-facing).

## 🎲 A regra principal (vale para tudo)

Sempre que fizer algo arriscado ou importante:

👉 **Role 1D6 por ponto do recurso usado** e use **apenas o melhor dado**

| Resultado | O que acontece |
|---|---|
| **6** | Você consegue **e algo muito legal acontece** |
| **4–5** | Você consegue |
| **2–3** | Você não consegue completamente |
| **1** | Algo dá errado ou engraçado acontece |

## 📐 Recursos (base do sistema)

Todo personagem possui **4 recursos** (cada um vai de **0 a 4**):

| Recurso | Uso padrão ofensivo | Uso padrão defensivo | Conceito |
|---|---|---|---|
| ❤️ **Vida** | ataque físico | “dano real” (quando tudo falha) | corpo, força, fôlego |
| 🛡️ **Esquiva** | — | desviar / bloquear ameaças físicas | reflexo, agilidade |
| 🟣 **Alma** | — | resistir efeitos espirituais/mentais | vontade, fé, espírito |
| 🔵 **Mana** | magia arcana | — | energia mágica bruta |

Regras fixas:

- **Habilidades especiais** custam **1 ponto** do recurso associado.
- **Limite de gasto**: em uma ação, você **não pode gastar mais de 1 ponto do mesmo recurso**.
  - Você pode gastar pontos de **recursos diferentes** na mesma ação (ex.: ❤️ + 🟣 = ok; ❤️ + ❤️ = não).
- Recursos **não regeneram durante o combate**.
- Recursos recuperam apenas em **descanso completo**.
- Quando um recurso chega a **0**, ele **não pode mais ser usado** (nem ofensiva, nem defensivamente).
  - Se você precisar resistir algo e o recurso correto estiver em **0**, o impacto vai para ❤️ **Vida**.

## ⚔️ Combate básico (motor)

No combate básico, **classes não existem ainda**. Só o motor:

1) Escolha o recurso usado (❤️/🛡️/🟣/🔵).  
2) Role **1D6 por ponto** desse recurso.  
3) Use **apenas o melhor resultado** e aplique a tabela do jogo.

Se você precisar rolar com um recurso que está em **0**, role **1D6** mesmo assim — mas **qualquer dano/impacto vai direto para ❤️ Vida** (se a Vida já estiver em 0, você desmaia).

## 🧩 Gastos universais (qualquer personagem)

- ❤️ **Esforço extremo**: gaste **❤️1** → seu ataque físico causa **+1 dano**.
- 🛡️ **Esquiva**: quando você tomaria **dano físico**, gaste **🛡️1** → anule **1** desse dano.
- 🟣 **Destino (Alma)**: gaste **🟣1** → dê **Ajuda** (**+1D6**) a uma rolagem **OU** dê **Atrapalho** (**-1D6, mínimo 1 dado**) a uma rolagem.
  - declare antes; vale para **1** rolagem
  - limite: um personagem **não pode receber mais de um Destino** na mesma rolagem
  - 🛑 **Alma não cura Vida por padrão**. Curar Vida é **milagre** (habilidade) ou coisa de **item/ritual**.
- 🔵 **Magia improvisada**: gaste **🔵1** → reproduza o efeito de uma **magia básica existente** em uma única ação.
  - dura só aquela ação (não fica ativo)
  - não tem área e não sustenta efeito
  - se causar dano, o dano máximo é **1**
  - por padrão, você **não repete o mesmo efeito** mais de uma vez por combate (a não ser que alguma habilidade permita)
  - lista oficial: `recursos.md`

## 📋 Tabela resumo (combate básico)

| Situação | Recurso | Rolagem | Gasto opcional |
|---|---|---|---|
| Ataque físico | ❤️ Vida | 1D6 por Vida (melhor) | ❤️1: +1 dano |
| Esquiva física | 🛡️ Esquiva | 1D6 por Esquiva (melhor) | 🛡️1: anule 1 dano físico |
| Resistência arcana | 🔵 Mana | 1D6 por Mana (melhor) | — |
| Magia improvisada | 🔵 Mana | 1D6 por Mana (melhor) | 🔵1: magia básica (dano máx 1) |
| Resistir medo/controle | 🟣 Alma | 1D6 por Alma (melhor) | 🟣1: Destino (+1D6 / -1D6) |

## 🟣 Destino (Alma) — texto oficial

> **Destino (🟣 Alma)**  
> Ao gastar **🟣1**, você interfere no destino: dê **Ajuda** (**+1D6**) a uma rolagem ou dê **Atrapalho** (**-1D6**) a uma rolagem.  
> Declare antes do dado; vale só para aquela rolagem. Um personagem não recebe mais de 1 Destino na mesma rolagem.

## ⚔ Combate (sem complicação)

### 🗡 Atacar um inimigo

1) Escolha o **tipo** do seu ataque:

- **Físico** (arma, soco, chute) → usa ❤️ **Vida**
- **Arcano**
  - **Magia improvisada (qualquer personagem)**: gaste **🔵1** → aplique o efeito de uma magia básica (dano máx **1**)
  - **Magia dominada (especialização/habilidade)**: gaste **🔵1** (ou custo indicado) → efeito completo/forte

2) Role **1D6 por ponto** do recurso do ataque (❤️/🔵) e use **apenas o melhor dado**. Depois aplique no **recurso do alvo**:

- Ataque **físico** causa dano em ❤️ **Vida** (o alvo pode gastar 🛡️1 para anular **1** desse dano).
- Ataque **arcano** tira pontos de 🔵 **Mana** do alvo; se a Mana estiver em **0**, o dano vai para ❤️ **Vida**.

- **6**: causa **2 de dano** e ativa algo legal da sua arma/pet; se ativar uma habilidade, pague o custo do recurso
- **4–5**: causa **1 de dano**
- **2–3**: escolha 1:
  - causa **1 de dano**, mas você perde **1 ponto** do recurso usado no ataque (❤️/🔵)
  - causa **0 de dano** (você não se expõe)
- **1**: causa **0 de dano** e você perde **2 pontos** do recurso usado no ataque (ou algo pior acontece)

Se o ataque arcano foi **Magia improvisada**, o dano máximo é **1** (mesmo no **6**).

### 🛡️️️ Quando um inimigo te ataca

Você **rola o dado**, não o monstro:

O mestre diz qual é o tipo do ataque (físico / arcano / espiritual-mental).

Você rola **1D6 por ponto** do recurso de resistência (🛡️/🔵/🟣) e usa **apenas o melhor dado**. A rolagem define se você resiste:

- **6**: você resiste e pode contra-atacar (se fizer sentido)
- **4–5**: você resiste
- **2–3**: você sofre **1 de dano** no recurso de resistência:
  - físico → ❤️ **Vida** (você pode gastar 🛡️1 para anular **1** desse dano)
  - arcano → 🔵 **Mana** (se estiver 0, vai para ❤️ **Vida**)
  - espiritual/mental → 🟣 **Alma** (se estiver 0, vai para ❤️ **Vida**)
- **1**: você sofre **2 de dano** no recurso do tipo do ataque (e o monstro pode impor uma condição se tiver esse “truque”)

Lembrete: quando você tomaria **dano físico**, você pode gastar **🛡️1** para anular **1** desse dano (ação universal).

## 🛡️️️ Armadura (escudo visual)

Armadura é **equipamento** (🟦), diferente de 🛡️ **Esquiva** (recurso).

- armadura tem **escudos desenhados** (🟦)
- quando você tomaria **dano físico**, pode apagar **1 🟦** para zerar aquele dano
- quando acaba → armadura quebra (ver `equipamentos.md`)

## 🩸 Vida 0

- chegou a **0 vida** → cai no chão
- se você estiver com ❤️ **Vida em 0** e sofrer dano que iria para ❤️ Vida, você **desmaia**
  - isso inclui dano físico e também dano arcano/espiritual quando 🔵/🟣 estiverem em 0 e o impacto “vazar” para ❤️ Vida
- desmaiado: não pode agir, não pode se defender e não pode gastar recursos
- para acordar: um aliado gasta 1 ação para ajudar **ou** uma cura **ou** fim do combate/descanso
- no modo infantil, personagens **não morrem**: desmaio é o “fim dramático” do combate

## 🎯 Ordem do turno

Ordem simples:

1. Jogadores agem (na ordem que decidirem)
2. Monstros agem
3. Nova rodada

Opcional: role **1D6 por grupo**; o maior começa.

## 🚶 Movimento (bem livre)

No seu turno você pode:

- se mover
- fazer **1 ação**

Distâncias são narrativas:

- perto
- longe
- muito longe

Sem contar quadrados.

## 🧩 Ajuda e atrapalho (opcional)

Quando estiver muito fácil ou muito difícil:

- **Ajuda (Vantagem)**: role **+1D6** (um dado extra) e use **apenas o melhor dado**
- **Atrapalho (Desvantagem)**: role **-1D6** (um dado a menos, mínimo 1 dado)

Use isso no lugar de bônus numéricos.

## ✨ Habilidades especiais (custam recurso)

- Quando você usar uma habilidade especial, gaste **1 ponto** do recurso associado (❤️/🛡️/🟣/🔵).
- Limite: em uma ação, você **não pode gastar mais de 1 ponto do mesmo recurso** (mas pode combinar recursos diferentes).
- Se o recurso está em **0**, aquela habilidade **não funciona**.

Detalhes por classe e ideias de poderes:

- `classes.md`

## 🧎 Condições (modo infantil recomendado — 4 estados)

Para crianças de 6–8, use **só quatro** condições fáceis de lembrar:

- 🟡 **Caído**: você caiu; não se move até levantar (levantar gasta sua ação).
- 🔴 **Tonto**: perde sua próxima ação.
- 🔵 **Preso**: não pode se mover; ainda pode agir.
- 🟢 **Protegido**: o próximo dano vira **0** (depois acaba).

Coisas como “arma caiu”, “escorregou”, “ficou com medo” podem existir, mas ficam só na **narração** (sem virar estado fixo).

### 🔁 Se você já usava as condições antigas

- Derrubado → **Caído**
- Atordoado → **Tonto**
- Imobilizado → **Preso**
- Enfraquecido / Desarmado → **narração**

## 🧱 Módulo opcional: combate em grid (quadrados)

Use se quiser tática visual no tabuleiro.

### 🚶 Movimento

- pode se mover **4 quadrados** por turno e ainda fazer **1 ação**
  - OU
- mover até **8 quadrados**, mas não pode atacar

### 📏 Alcance

- corpo a corpo: alvos adjacentes (1 quadrado)
- arco/magia à distância: alcance máximo **8 quadrados**

### 🛑 Sair do corpo a corpo

Se estiver adjacente a inimigo e sair sem usar a ação **Recuar**, o inimigo te “pressiona” e você rola uma esquiva.

**Recuar**: move até **2 quadrados** e não sofre essa esquiva.

### 🎛 Regras opcionais (grid)

- **Cobertura**: esquiva com **Ajuda** contra ataques à distância
- **Flanquear**: ataque com **Ajuda** quando dois aliados cercam o inimigo
- **Terreno difícil**: alguns quadrados custam **2** de movimento para entrar
