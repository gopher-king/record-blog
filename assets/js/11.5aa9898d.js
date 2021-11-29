(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{545:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("闭包---我们经常听到这个词，那么究竟什么是闭包呢，我们来打破砂锅问到底的方式探索一下。")]),s._v(" "),a("h1",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[s._v("#")]),s._v(" 定义")]),s._v(" "),a("p",[s._v("在不同的地方对它的定义相似但是略有差异")]),s._v(" "),a("blockquote",[a("p",[s._v("在计算机科学中，闭包（Closure），是引用了自由变量的函数。这个被引用的自由变量将和这个函数一同存在，即使已经离开了创造它的环境也不例外。所以，有另一种说法认为闭包是由函数和与其相关的引用环境组合而成的实体。\t\t---"),a("strong",[s._v("维基百科")])])]),s._v(" "),a("blockquote",[a("p",[s._v("函数与对其状态即词法环境（lexical environment）的引用共同构成闭包（closure）。也就是说，闭包可以让你从内部函数访问外部函数作用域。在JavaScript，函数在每次创建时生成闭包。\n简言之，闭包是由函数引用其周边状态（词法环境）绑在一起形成的（封装）组合结构。在 JavaScript 中，闭包在每个函数被创建时形成。 ---"),a("strong",[s._v("MDN")])])]),s._v(" "),a("blockquote",[a("p",[s._v("函数对象可以通过作用域链相互关联起来，函数体内部的变量都可以保存在函数作用域内，这种特性在计算机科学文献中称为闭包。---"),a("strong",[s._v("JavaScript权威指南")])])]),s._v(" "),a("blockquote",[a("p",[s._v("闭包是指有权访问另一个函数作用域中的变量的函数。\t\t---"),a("strong",[s._v("JavaScript高级程序设计")])])]),s._v(" "),a("h1",{attrs:{id:"前置知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置知识"}},[s._v("#")]),s._v(" 前置知识")]),s._v(" "),a("p",[s._v("在上述概念中，有多个词高频出现，比如：词法环境、作用域链 等。看来我们想要弄懂闭包先要把这些概念弄明白。")]),s._v(" "),a("h2",{attrs:{id:"作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[s._v("#")]),s._v(" 作用域")]),s._v(" "),a("p",[s._v("作用域就是一套规则，用于确定在何处以及如何查找变量（标识符）的规则")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// eg1:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 输出"test"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// eg2:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 输出"hello"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 函数作用域、全局作用域")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"作用域链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域链"}},[s._v("#")]),s._v(" 作用域链")]),s._v(" "),a("p",[s._v("我们在查找d变量的时候，先在函数作用域1中查找，没有找到，逐层向外层作用域查找，有一个往外层查找的过程。如下图红色箭头：我们好像是顺着一条链条从下往上查找变量，这条链条，我们就称之为作用域链。\n"),s._v(" "),a("img",{attrs:{src:s.$withBase("/assets/img/javascript/scope_chain.jpg"),alt:"mixureSecure"}})]),s._v(" "),a("h3",{attrs:{id:"作用域嵌套"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域嵌套"}},[s._v("#")]),s._v(" 作用域嵌套")]),s._v(" "),a("p",[s._v("在还没有接触到ES6的let、const之前，只有函数作用域和全局作用域，函数作用域肯定是在全局作用域里面的，而函数作用域中又可以继续嵌套函数作用域，如上图，矩形框框作用域层层嵌套。")]),s._v(" "),a("h2",{attrs:{id:"词法环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#词法环境"}},[s._v("#")]),s._v(" 词法环境")]),s._v(" "),a("p",[s._v("在上面的作用域介绍中，我们将作用域定义为一套规则，这套规则来管理浏览器引擎如何在当前作用域以及嵌套的作用域中根据变量（标识符）进行变量查找。")]),s._v(" "),a("p",[s._v("“词法作用域是作用域的一种工作模型”，作用域有两种工作模型，在JavaScript中的词法作用域是比较主流的一种，另一种动态作用域\n（比较少的语言在用）。")]),s._v(" "),a("p",[s._v("所谓的词法作用域就是在你写代码时将变量和块作用域写在哪里来决定，也就是\n词法作用域是静态的作用域，在你书写代码时就确定了")]),s._v(" "),a("h3",{attrs:{id:"变量-标识符-的查找规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量-标识符-的查找规则"}},[s._v("#")]),s._v(" 变量（标识符）的查找规则")]),s._v(" "),a("p",[s._v("首先声明一点，JavaScript是有编译过程的。")]),s._v(" "),a("p",[s._v("eg:\nvar name = 'test'\n编译器在当前作用域中声明一个变量name\n运行时引擎在作用域中查找该变量，找到了name变量并为其赋值")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出undefined")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("在var name = 'test'的上一行输出name变量，并没有报错，输出undefined，说明输出的时候该变量已经存在了，只是没有赋值而已。\n其实编译器是这样工作的，在代码执行之前从上到下的进行编译，当遇到某个用var声明的变量的时候，先检查在当前作用域下是否存在了该变量。如果存在，则忽略这个声明；如果不存在，则在当前作用域中声明该变量。\n上面的这段简单的代码包含两种查找类型：\n输出变量的值的时候的查找类型是RHS，找到变量为其赋值的查找类型是LHS。")]),s._v(" "),a("p",[s._v("这里的左侧和右侧指的是在赋值操作的左侧和右侧。也就是说，变量出现在赋值操作的左侧时进行LHS查询，出现在右侧时进行RHS查询。用一句通俗的话来讲，RHS就是取到它的源值。")]),s._v(" "),a("p",[s._v("注意：“赋值操作的左侧和右侧”，并不意味着只是“=”，实际上赋值操作还有好几种形式。")]),s._v(" "),a("p",[s._v("在作用域中查找变量都是RHS，并且查找的规则是从当前作用域开始找，如果没找到再到父级作用域中找，一层层往外找，如果在全局作用域如果还没找到的话，就会报错了：ReferenceError: 某变量 is not defined")]),s._v(" "),a("p",[s._v("所有的赋值操作中查找变量都是LHS。其中a=4这类赋值操作，也是会从当前作用域中查找，如果没有找到再到外层作用域中找，如果到全局变量啊这个变量，在非严格模式下会创建一个全局变量a\n。不过，非常不建议这么做，因为轻则污染全局变量，重则造成内存泄漏（比如：a = 一个非常大的数组，a在全局变量中，一直用有引用，程序不会自动将其销毁）。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前词法环境(LexicalEnvironment)--window")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 环境记录器（Environment Record）  存储变量和函数声明的实际位置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 外部环境的引用（outer Lexical Environment）:null")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("fn3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("debugger")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前创建词法环境(LexicalEnvironment)--fn3")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 环境记录器（Environment Record")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 外部环境的引用（outer Lexical Environment）:window   ↑")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("fn2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前词法环境(LexicalEnvironment)--fn2")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 环境记录器（Environment Record")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 外部环境的引用（outer Lexical Environment）:fn3  ↑")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("fn1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前词法环境(LexicalEnvironment)--fn1")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 环境记录器（Environment Record")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 外部环境的引用（outer Lexical Environment）:fn2  ↑")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// console.log(test);")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'result:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h2",{attrs:{id:"javascript执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript执行过程"}},[s._v("#")]),s._v(" javascript执行过程")]),s._v(" "),a("p",[s._v("这里大致说一下JavaScript执行过程。\n"),a("img",{attrs:{src:s.$withBase("/assets/img/javascript/JavaScript_Process.png"),alt:"mixureSecure"}})]),s._v(" "),a("p",[s._v("TODO")]),s._v(" "),a("ul",[a("li",[s._v("javascript 执行过程")]),s._v(" "),a("li",[s._v("闭包调试")]),s._v(" "),a("li",[s._v("闭包的优缺点")]),s._v(" "),a("li",[s._v("闭包的应用")])])])}),[],!1,null,null,null);t.default=e.exports}}]);