const header = [
  {
    id: 'id',
    title: 'ID',
    sortable: true,
    sortType: 'number'
  },
  {
    id: 'user',
    title: 'Клиент',
    sortable: true,
    sortType: 'string'
  },
  {
    id: 'createdAt',
    title: 'Дата',
    sortable: true,
    sortType: 'string',
    template: data => {
      let showDateFrom = new Date(data).toLocaleDateString('ru-RU', { day: '2-digit', month: 'short', year: 'numeric' });
      return `<div class="sortable-table__cell">
          ${showDateFrom}
        </div>`;
    }
  },
  {
    id: 'totalCost',
    title: 'Стоимость',
    sortable: true,
    sortType: 'number',
    template: data => {
      return `<div class="sortable-table__cell">
          $${data}
        </div>`;
    }
  },
  {
    id: 'delivery',
    title: 'Статус',
    sortable: true,
    sortType: 'string',
    template: data => {
      return `<div class="sortable-table__cell">
          ${data}
        </div>`;
    }
  },
];

export default header;
