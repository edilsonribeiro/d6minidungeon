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
| 🛡️ **Defesa (Esquiva)** | — | desviar / bloquear ameaças físicas | reflexo, agilidade |
| 🟣 **Alma** | milagres / influência | resistir efeitos espirituais/mentais | vontade, fé, espírito |
| 🔵 **Mana** | magia arcana | resistir magia arcana | energia mágica bruta |

Regras fixas:

- **Habilidades especiais** custam **1 ponto** do recurso associado.
- Recursos **não regeneram durante o combate**.
- Recursos recuperam apenas em **descanso completo**.
- Quando um recurso chega a **0**, ele **não pode mais ser usado** (nem ofensiva, nem defensivamente).
  - Se você precisar resistir algo e o recurso correto estiver em **0**, o impacto vai para ❤️ **Vida**.

## ⚔️ Combate básico (motor)

No combate básico, **classes não existem ainda**. Só o motor:

1) Escolha o recurso usado (❤️/🛡️/🟣/🔵).  
2) Role **1D6 por ponto** desse recurso.  
3) Use **apenas o melhor resultado** e aplique a tabela do jogo.

Se você precisar rolar com um recurso que está em **0**, role **1D6** mesmo assim — mas **qualquer dano/impacto vai direto para ❤️ Vida**.

## 🧩 Gastos universais (qualquer personagem)

- ❤️ **Esforço extremo**: gaste **❤️1** → seu ataque físico causa **+1 dano**.
- 🛡️ **Esquiva total**: antes de uma defesa física, gaste **🛡️1** → você resiste automaticamente (como **4–5**) e não sofre dano.
- 🟣 **Destino (Alma)**: gaste **🟣1** → dê **Ajuda** (**+1D6**) a uma rolagem **OU** dê **Atrapalho** (**-1D6, mínimo 1 dado**) a uma rolagem.
  - declare antes; vale para **1** rolagem
  - limite: um personagem **não pode receber mais de um Destino** na mesma rolagem
  - 🛑 **Alma não cura Vida por padrão**. Curar Vida é **milagre** (habilidade) ou coisa de **item/ritual**.
- 🔵 **Truque arcano**: gaste **🔵1** → produza um efeito mágico **simples e imediato** (luz, faísca, vento, empurrão leve, destravar/travar simples).
  - em combate, pode virar um ataque arcano **simples** (dano máximo **1**, sem área)
  - lista oficial de efeitos: `mana.md`

## 📋 Tabela resumo (combate básico)

| Situação | Recurso | Rolagem | Gasto opcional |
|---|---|---|---|
| Ataque físico | ❤️ Vida | 1D6 por Vida (melhor) | ❤️1: +1 dano |
| Defesa física | 🛡️ Defesa | 1D6 por Defesa (melhor) | 🛡️1: desvio automático |
| Defesa arcana | 🔵 Mana | 1D6 por Mana (melhor) | — |
| Truque/ataque arcano simples | 🔵 Mana | 1D6 por Mana (melhor) | 🔵1: efeito simples (dano máx 1) |
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
  - **Truque arcano (qualquer personagem)**: gaste **🔵1** → dano máximo **1**
  - **Magia arcana (especialização/habilidade)**: gaste **🔵1** (ou custo indicado) → dano normal do sistema
- **Espiritual/mental (milagre/influência)**: só se você tiver uma habilidade. Gaste **🟣1**.

2) Role **1D6 por ponto** do recurso do ataque (❤️/🔵/🟣) e use **apenas o melhor dado**. Depois aplique no **recurso do alvo**:

- Ataque **físico** tira pontos de 🛡️ **Defesa** do alvo; se a Defesa estiver em **0**, o dano vai para ❤️ **Vida**.
- Ataque **arcano** tira pontos de 🔵 **Mana** do alvo; se a Mana estiver em **0**, o dano vai para ❤️ **Vida**.
- Ataque **espiritual/mental** tira pontos de 🟣 **Alma** do alvo; se a Alma estiver em **0**, o dano vai para ❤️ **Vida**.

- **6**: causa **2 de dano** e ativa algo legal da sua arma/pet; se ativar uma habilidade, pague o custo do recurso
- **4–5**: causa **1 de dano**
- **2–3**: escolha 1:
  - causa **1 de dano**, mas você perde **1 ponto** do recurso usado no ataque (❤️/🔵/🟣)
  - causa **0 de dano** (você não se expõe)
- **1**: causa **0 de dano** e você perde **2 pontos** do recurso usado no ataque (ou algo pior acontece)

Se o ataque arcano foi um **Truque arcano**, o dano máximo é **1** (mesmo no **6**).

### 🛡️️️ Quando um inimigo te ataca

Você **rola o dado**, não o monstro:

O mestre diz qual é o tipo do ataque (físico / arcano / espiritual-mental).

Você rola **1D6 por ponto** do recurso de resistência (🛡️/🔵/🟣) e usa **apenas o melhor dado**. A rolagem define se você resiste:

- **6**: você resiste e pode contra-atacar (se fizer sentido)
- **4–5**: você resiste
- **2–3**: você sofre **1 de dano** no recurso de resistência:
  - físico → 🛡️ **Defesa** (se estiver 0, vai para ❤️ **Vida**)
  - arcano → 🔵 **Mana** (se estiver 0, vai para ❤️ **Vida**)
  - espiritual/mental → 🟣 **Alma** (se estiver 0, vai para ❤️ **Vida**)
- **1**: você sofre **2 de dano** (e o monstro pode impor uma condição se tiver esse “truque”)

Lembrete: antes de uma defesa física, você pode gastar **🛡️1** para resistir automaticamente (ação universal).

## 🛡️️️ Armadura (escudo visual)

Armadura é **equipamento** (🟦), diferente de 🛡️ **Defesa** (recurso).

- armadura tem **escudos desenhados** (🟦)
- quando você tomaria **dano físico** (que reduziria 🛡️ Defesa ou ❤️ Vida), pode apagar **1 🟦** para zerar aquele dano
- quando acaba → armadura quebra (ver `equipamentos.md`)

## 🩸 Vida 0

- chegou a **0 vida** → cai no chão
- um amigo pode ajudar
- no modo infantil, personagens **não morrem**: só desmaiam

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

Se estiver adjacente a inimigo e sair sem usar a ação **Recuar**, o inimigo te “pressiona” e você rola uma defesa.

**Recuar**: move até **2 quadrados** e não sofre essa defesa.

### 🎛 Regras opcionais (grid)

- **Cobertura**: defesa com **Ajuda** contra ataques à distância
- **Flanquear**: ataque com **Ajuda** quando dois aliados cercam o inimigo
- **Terreno difícil**: alguns quadrados custam **2** de movimento para entrar
