module.exports = {
  types: [
    { value: 'feat', name: 'feat:     新增功能' },
    { value: 'fix', name: 'fix:      修复 bug' },
    { value: 'docs', name: 'docs:     文档变更' },
    {
      value: 'style',
      name:
        'style:    代码格式\n            (不影响代码意义的变更，例如：空白、格式、缺少分号等)',
    },
    {
      value: 'refactor',
      name: 'refactor: 代码重构（既不修复错误也不添加特性的代码变更）',
    },
    {
      value: 'perf',
      name: 'perf:     提前性能的代码变更',
    },
    { value: 'test', name: 'test:     添加、修改测试用例' },
    {
      value: 'chore',
      name:
        'chore:    对构建过程或辅助工具的更改\n            以及文档生成等库',
    },
    { value: 'revert', name: 'revert:   回滚提交' },
    { value: 'WIP', name: 'WIP:      进行中的工作' },
  ],

  // scope 类型（定义之后，可通过上下键选择）
  scopes: [
    ['components', '组件相关'],
    ['hooks', 'hook 相关'],
    ['utils', 'utils 相关'],
    ['element-ui', '对 element-ui 的调整'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['other', '其他修改'],
    // 如果选择 custom，后面会再输入一个自定义的 scope
    ['custom', '以上都不是？我要自定义']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "确保提交遵循 commitizen 规范! \n选择你要提交的更改类型:",
    scope: '\n选择一个 scope (可选):',
    // used if allowCustomScopes is true
    customScope: '请输入自定义的 scope:',
    subject: '输入精简的变更描述:\n',
    body: '输入更加详细的变更描述（可选）；使用 "|" 换行:\n',
    breaking: '列举非兼容性重大的变更（可选）:\n',
    footer: '列举出所有变更的 ISSUES CLOSED (可选). 例如: #31, #34:\n',
    confirmCommit: '您确定要继续执行上面的提交吗?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  // skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 100,
  breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
