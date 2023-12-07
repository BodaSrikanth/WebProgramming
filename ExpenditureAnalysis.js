function calculateTotalSpentByCategory(transactions) {
    const categoryMap = {};
    transactions.forEach(transaction => {
      const { category, price } = transaction;
      if (!categoryMap[category]) {
        categoryMap[category] = price;
      } else {
        categoryMap[category] += price;
      }
    });
    const result = Object.keys(categoryMap).map(category => ({
      category,
      totalSpent: categoryMap[category],
    }));
  
    return result;
  }
  const transactions = [
    {
      id: 1,
      timestamp: 1656076800000,
      price: 10,
      category: 'Food',
      itemName: 'Pizza',
    },
    {
      id: 2,
      timestamp: 1656076800000,
      price: 20,
      category: 'Clothing',
      itemName: 'T-shirt',
    },
    {
        id: 3,
        timestamp: 1656076800000,
        price: 30,
        category: 'ElectronicDevice',
        itemName: 'PC',
      },
  
  ];
  
  const result = calculateTotalSpentByCategory(transactions);
  console.log(result);
  