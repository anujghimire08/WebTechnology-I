for $exp in doc ("Expenses.xml")//category/item
where $exp/amount < 2000
return $exp/amount