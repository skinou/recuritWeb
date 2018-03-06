
const nav = ['技术','产品','视觉设计','运营','市场','人力资源','金融'];

const technology = [
  {
    item: '后端开发',
    itemData: [
      'Java','C++','PHP','C','C#'
    ]
  },
  {
    item: '移动开发',
    itemData: [
      'HTML5','Android','iOS'
    ]
  },
  {
    item: '前端开发',
    itemData: [
      'web前端','Flash','JavaScript','COCOS2D-X'
    ]
  }
];

const  product = [
  {
    item: '产品经理',
    itemData: [
      '产品经理','产品助理','游戏策划','产品实习生'
      ]
  },
  {
    item: '产品设计师',
    itemData: [
      '网页产品设计师','无线产品设计师'
      ]
  },
  {
    item: '高端职位',
    itemData: [
      '产品总监','游戏制作人'
      ]
  }
  ];

const  view = [
  {
    item: '视觉设计',
    itemData: [
      '视觉设计师','网页设计师','Flash设计师','APP设计师','平面设计师'
      ]
  },
  {
    item: '交互设计',
    itemData: [
      '交互设计师','网页交互设计师'
      ]
  },
  {
    item: '用户研究',
    itemData: [
      '数据分析师','用户研究员','游戏数值策划'
      ]
  }
  ];


const   operating = [
  {
    item: '运营',
    itemData: [
      '用户运营','产品运营','数据运营','活动运营','网络推广','游戏运营'
      ]
  },
  {
    item: '编辑',
    itemData: [
      '主编','内容编辑','文案策划','记者'
      ]
  },
  {
    item: '客服',
    itemData: [
      '售前咨询','售后客服','客服经理'
      ]
  }
  ];


const  market = [
  {
    item: '市场/营销',
    itemData: [
      '市场营销','市场策划','市场顾问','市场推广','SEO'
      ]
  },
  {
    item: '公关',
    itemData: [
      '媒介经理','广告协调','品牌公关'
      ]
  },
  {
    item: '销售',
    itemData: [
      '销售专员','销售经理','客户代表','商务渠道'
      ]
  }
  ];

const  humanResource = [
  {
    item: '人力资源',
    itemData: [
      '人力资源','招聘','HRBP','培训经理'
      ]
  },
  {
    item: '行政',
    itemData: [
      '助理','前台','文秘'
      ]
  },
  {
    item: '财务',
    itemData: [
      '会计','出纳','税务','审计'
      ]
  }
  ];

const fiance = [
  {
    item: '投融资',
    itemData: [
      '投资经理','分析师','投资助理','融资'
      ]
  },
  {
    item: '风控',
    itemData: [
      '风控','资信评估','律师'
      ]
  },
  {
    item: '审计财务',
    itemData: [
      '会计','清算','审计'
      ]
  }
  ];

const jobItem = {
    addressItem: ['全部','北京','上海','深圳','广州'],
    experienceItem: ['全部','经验不限','3年以下','3-5年','5-10年','10年以上'],
    degreeItem: ['全部','大专','本科','硕士','博士'],
    salaryItem: ['全部','2k以下','2k-5k','5k-10k','10k-15k','15k-25k','25k-50k','50k以上'],
    typeItem: ['全部','实习','全职','兼职']
  }

const companyItem = {
  addressItem: ['全部','北京','上海','深圳','广州'],
  fianceItem: ['全部','未融资','天使轮','A轮','B轮','C轮','D轮','D轮以上','上市公司','不需要融资'],
  fieldItem: ['全部','移动互联网','电子商务','金融','企业服务','教育',
              '文化娱乐','游戏','O2O','硬件','旅游','医疗健康',
              '生活服务','广告营销','数据服务','社交服务','分类信息','信息安全','招聘','其他']
}


export default {
  nav,
  data:[
    technology,
    product,
    view,
    operating,
    market,
    humanResource,
    fiance
  ],
  jobItem,
  companyItem

}
