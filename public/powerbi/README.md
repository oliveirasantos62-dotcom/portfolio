# Downloads para os estudos de caso Power BI

Os dashboards exibidos no site são protótipos visuais. Este pacote contém datasets sintéticos para reproduzir os estudos no Power BI Desktop.

- dataset-performance-comercial.csv: vendas, região, categoria, quantidade, preço, desconto e receita.
- dataset-financeiro.csv: receitas/despesas realizadas e orçamento mensal.
- dataset-estoque.csv: estoque, mínimo, vendas de 30 dias e custo.

Sugestões de medidas DAX:
- Receita = SUM(Vendas[receita])
- Unidades = SUM(Vendas[quantidade])
- Resultado = SUM(Financeiro[receita])-SUM(Financeiro[despesas])
- Desvio receita = SUM(Financeiro[receita])-SUM(Financeiro[orcamento_receita])
- Itens críticos = COUNTROWS(FILTER(Estoque, Estoque[estoque_atual] <= Estoque[estoque_minimo]))
- Valor em estoque = SUMX(Estoque, Estoque[estoque_atual]*Estoque[custo_unitario])

Todos os dados são sintéticos, gerados para portfólio e treinamento.
