interface MagicItem {
    id: string;
    name: string;
    nameEn: string;
    type: string;
    weight: string;
    attunement: boolean;
    attunementRequirement?: string;
    rarity: 'Common' | 'Uncommon' | 'Rare' | 'Very Rare' | 'Legendary' | 'Artifact';
    source: {
      book: string;
      page: number;
    };
    description: string;
    baseAnalog?: string;
    craftingTools?: number[];
    developerComment?: string;
  }
  
  export const magicItems: MagicItem[] = [
    {
      id: 'adamantine-weapon',
      name: 'Адамантитовое оружие',
      nameEn: 'Adamantine Weapon',
      type: 'Оружие, любой боеприпас или рукопашное оружие',
      weight: '—',
      attunement: false,
      rarity: 'Uncommon',
      source: {
        book: 'DMG',
        page: 227
      },
      description: `<p>Это оружие или боеприпас изготовлены из адамантитатита, одного из самых твёрдых веществ, существующих на свете. Каждый раз, когда это оружие или боеприпас попадает в объект, попадание становится критическим.</p>`,
      baseAnalog: '-',
      craftingTools: [7],
      developerComment: 'Отлично подходит для разрушения объектов и преодоления укреплений. Особенно эффективно против дверей, стен и доспехов.'
    },
    {
      id: 'adamantine-armor',
      name: 'Адамантитовый доспех',
      nameEn: 'Adamantine Armor',
      type: 'Доспех, любой средний или тяжёлый, кроме шкурного доспеха',
      weight: '—',
      attunement: false,
      rarity: 'Uncommon',
      source: {
        book: 'DMG',
        page: 227
      },
      description: `<p>Этот комплект доспехов усилен адамантитом адамантитом, одним из самых твёрдых веществ, существующих на свете. Пока вы носите эту броню, любое критический попадание по вам становится обычным попаданием.</p>`,
      baseAnalog: '-',
      craftingTools: [7]
    },
    {
      id: 'alchemy-jug',
      name: 'Алхимический сосуд',
      nameEn: 'Alchemy Jug',
      type: 'Чудесный предмет',
      weight: '12 фнт.',
      attunement: false,
      rarity: 'Uncommon',
      source: {
        book: 'DMG',
        page: 227
      },
      description: `<p>Этот керамический сосуд, кажется способным вместить 1 галлон жидкости и весит 12 фунтов вне зависимости от того, полный он или пустой. Если его потрясти, то можно услышать звуки плескающейся жидкости, даже если сосуд пуст.</p><p>Вы можете действием магия назвать 1 жидкость из приведённой ниже таблицы, чтобы заставить сосуд производить её. После этого вы можете ещё одним действием откупорить сосуд и вылить эту жидкость из сосуда со скоростью до 2 галлонов в минуту. Максимальное количество жидкости, которое сосуд может производить, зависит от названной вами жидкости.</p><p>После того, как сосуд начинает производить выбранную жидкость, он не может производить другую, или произвести названную жидкость в объёме больше её максимума, пока не наступит следующий рассвет.</p><table><thead><tr><th>Жидкость</th><th>Макс. объём</th></tr></thead><tbody><tr><td>Вино</td><td>1 галлон/3,78 литра</td></tr><tr><td>Вода, пресная</td><td>8 галлонов/30,28 литров</td></tr><tr><td>Вода, солёная</td><td>12 галлонов/45,43 литра</td></tr><tr><td>Кислота</td><td>8 унций/0,23 литра</td></tr><tr><td>Майонез</td><td>2 галлона/7,57 литров</td></tr><tr><td>Масло</td><td>1 кварта/0,94 литра</td></tr><tr><td>Мёд</td><td>1 галлон/3,78 литра</td></tr><tr><td>Пиво</td><td>4 галлона/15,14 литра</td></tr><tr><td>Простой яд</td><td>4 унции/0,12 литров</td></tr><tr><td>Уксус</td><td>2 галлона/7,57 литров</td></tr></tbody></table>`,
      baseAnalog: '-',
      craftingTools: [2],
      developerComment: 'Невероятно полезный предмет для длительных путешествий. Может обеспечить группу водой и базовыми жидкостями. Майонез и мёд особенно ценны для торговли.'
    },
    {
      id: 'ring-of-protection',
      name: 'Кольцо защиты',
      nameEn: 'Ring of Protection',
      type: 'Кольцо',
      weight: '—',
      attunement: true,
      attunementRequirement: 'заклинателем',
      rarity: 'Rare',
      source: {
        book: 'DMG',
        page: 191
      },
      description: `<p>Вы получаете бонус +1 к КД и спасброскам, пока носите это кольцо.</p>`,
      baseAnalog: 'Кольцо',
      craftingTools: [17]
    },
    {
      id: 'ring-of-protection',
      name: 'Кольцо защиты',
      nameEn: 'Ring of Protection',
      type: 'Кольцо',
      weight: '—',
      attunement: true,
      attunementRequirement: 'заклинателем',
      rarity: 'Rare',
      source: {
        book: 'DMG',
        page: 191
      },
      description: `<p>Вы получаете бонус +1 к КД и спасброскам, пока носите это кольцо.</p>`,
      baseAnalog: 'Кольцо',
      craftingTools: [17]
    }
  ];