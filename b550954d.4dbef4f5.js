(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{578:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var i=n(1),a=n(6),r=(n(0),n(807)),o={title:"Working with Entity Manager",sidebar_label:"Entity Manager"},s={unversionedId:"entity-manager",id:"version-2.7/entity-manager",isDocsHomePage:!1,title:"Working with Entity Manager",description:"Persist and flush",source:"@site/versioned_docs/version-2.7/entity-manager.md",slug:"/entity-manager",permalink:"/docs/2.7/entity-manager",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/entity-manager.md",version:"2.7",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1605028809,sidebar_label:"Entity Manager",sidebar:"version-2.7/docs",previous:{title:"Defining entities",permalink:"/docs/2.7/defining-entities"},next:{title:"Using EntityRepository instead of EntityManager",permalink:"/docs/2.7/repositories"}},l=[{value:"Persist and flush",id:"persist-and-flush",children:[]},{value:"Persisting and cascading",id:"persisting-and-cascading",children:[{value:"Auto flushing",id:"auto-flushing",children:[]}]},{value:"Fetching entities with EntityManager",id:"fetching-entities-with-entitymanager",children:[{value:"Fetching partial entities",id:"fetching-partial-entities",children:[]}]},{value:"Type of fetched entities",id:"type-of-fetched-entities",children:[]},{value:"Entity repositories",id:"entity-repositories",children:[]},{value:"EntityManager API",id:"entitymanager-api",children:[]}],b={rightToc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"persist-and-flush"},"Persist and flush"),Object(r.b)("p",null,"There are 2 methods we should first describe to understand how persisting works in MikroORM:\n",Object(r.b)("inlineCode",{parentName:"p"},"em.persist()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"em.flush()"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"em.persist(entity, flush?: boolean)")," is used to mark new entities for future persisting.\nIt will make the entity managed by given ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager")," and once ",Object(r.b)("inlineCode",{parentName:"p"},"flush")," will be called, it\nwill be written to the database. Second boolean parameter can be used to invoke ",Object(r.b)("inlineCode",{parentName:"p"},"flush"),"\nimmediately. Its default value is configurable via ",Object(r.b)("inlineCode",{parentName:"p"},"autoFlush")," option."),Object(r.b)("p",null,"To understand ",Object(r.b)("inlineCode",{parentName:"p"},"flush"),", lets first define what managed entity is: An entity is managed if\nit\u2019s fetched from the database (via ",Object(r.b)("inlineCode",{parentName:"p"},"em.find()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"em.findOne()")," or via other managed entity)\nor registered as new through ",Object(r.b)("inlineCode",{parentName:"p"},"em.persist()"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"em.flush()")," will go through all managed entities, compute appropriate change sets and\nperform according database queries. As an entity loaded from database becomes managed\nautomatically, you do not have to call persist on those, and flush is enough to update\nthem."),Object(r.b)("h2",{id:"persisting-and-cascading"},"Persisting and cascading"),Object(r.b)("p",null,"To save entity state to database, you need to persist it. Persist takes care or deciding\nwhether to use ",Object(r.b)("inlineCode",{parentName:"p"},"insert")," or ",Object(r.b)("inlineCode",{parentName:"p"},"update")," and computes appropriate change-set. Entity references\nthat are not persisted yet (does not have identifier) will be cascade persisted automatically. "),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"// use constructors in your entities for required parameters\nconst author = new Author('Jon Snow', 'snow@wall.st');\nauthor.born = new Date();\n\nconst publisher = new Publisher('7K publisher');\n\nconst book1 = new Book('My Life on The Wall, part 1', author);\nbook1.publisher = publisher;\nconst book2 = new Book('My Life on The Wall, part 2', author);\nbook2.publisher = publisher;\nconst book3 = new Book('My Life on The Wall, part 3', author);\nbook3.publisher = publisher;\n\n// just persist books, author and publisher will be automatically cascade persisted\nawait orm.em.persistAndFlush([book1, book2, book3]);\n\n// or one by one\norm.em.persistLater(book1);\norm.em.persistLater(book2);\norm.em.persistLater(book3); \nawait orm.em.flush(); // flush everything to database at once\n")),Object(r.b)("h3",{id:"auto-flushing"},"Auto flushing"),Object(r.b)("p",null,"By default, ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager.persist()")," will ",Object(r.b)("strong",{parentName:"p"},"flush your changes automatically"),". You can use\nits second parameter to disable auto-flushing, and use ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager.flush()")," manually. "),Object(r.b)("p",null,"You can also disable this feature globally via ",Object(r.b)("inlineCode",{parentName:"p"},"autoFlush")," option when initializing the ORM:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  autoFlush: false,\n  // ...\n});\nawait orm.em.persist(new Entity()); // no auto-flushing now\nawait orm.em.flush();\nawait orm.em.persist(new Entity(), true); // you can still use second parameter to auto-flush\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Default value of ",Object(r.b)("inlineCode",{parentName:"p"},"autoFlush")," is currently set to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", which will change in upcoming major\nrelease. Users are encouraged to either set ",Object(r.b)("inlineCode",{parentName:"p"},"autoFlush")," to ",Object(r.b)("inlineCode",{parentName:"p"},"false")," or use ",Object(r.b)("inlineCode",{parentName:"p"},"em.persistLater()"),"\n(equal to ",Object(r.b)("inlineCode",{parentName:"p"},"em.persist(entity, false)"),") and ",Object(r.b)("inlineCode",{parentName:"p"},"em.persistAndFlush()")," methods instead. ")),Object(r.b)("h2",{id:"fetching-entities-with-entitymanager"},"Fetching entities with EntityManager"),Object(r.b)("p",null,"To fetch entities from database you can use ",Object(r.b)("inlineCode",{parentName:"p"},"find()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"findOne()")," of ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager"),": "),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"const author = await orm.em.findOne(Author, '...id...');\nconst books = await orm.em.find(Book, {});\n\nfor (const author of authors) {\n  console.log(author.name); // Jon Snow\n\n  for (const book of author.books) {\n    console.log(book.title); // initialized\n    console.log(book.author.isInitialized()); // true\n    console.log(book.author.id);\n    console.log(book.author.name); // Jon Snow\n    console.log(book.publisher); // just reference\n    console.log(book.publisher.isInitialized()); // false\n    console.log(book.publisher.id);\n    console.log(book.publisher.name); // undefined\n  }\n}\n")),Object(r.b)("h3",{id:"fetching-partial-entities"},"Fetching partial entities"),Object(r.b)("p",null,"When fetching single entity, you can choose to select only parts of an entity via ",Object(r.b)("inlineCode",{parentName:"p"},"options.fields"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"const author = await orm.em.findOne(Author, '...', { fields: ['name', 'born'] });\nconsole.log(author.id); // PK is always selected\nconsole.log(author.name); // Jon Snow\nconsole.log(author.email); // undefined\n")),Object(r.b)("h2",{id:"type-of-fetched-entities"},"Type of fetched entities"),Object(r.b)("p",null,"Both ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager.find")," and ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager.findOne()")," methods have generic return types.\nAll of following examples are equal and will let typescript correctly infer the entity type:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"const author1 = await orm.em.findOne<Author>(Author.name, '...id...');\nconst author2 = await orm.em.findOne<Author>('Author', '...id...');\nconst author3 = await orm.em.findOne(Author, '...id...');\n")),Object(r.b)("p",null,"As the last one is the least verbose, it should be preferred. "),Object(r.b)("h2",{id:"entity-repositories"},"Entity repositories"),Object(r.b)("p",null,"Although you can use ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager")," directly, much more convenient way is to use\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://mikro-orm.io/repositories/"}),Object(r.b)("inlineCode",{parentName:"a"},"EntityRepository")," instead"),". You can register\nyour repositories in dependency injection container like ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"http://inversify.io/"}),"InversifyJS"),"\nso you do not need to get them from ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager")," each time."),Object(r.b)("p",null,"For more examples, take a look at\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mongo.test.ts"}),Object(r.b)("inlineCode",{parentName:"a"},"tests/EntityManager.mongo.test.ts")),"\nor ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mongo.test.ts"}),Object(r.b)("inlineCode",{parentName:"a"},"tests/EntityManager.mysql.test.ts")),"."),Object(r.b)("h2",{id:"entitymanager-api"},"EntityManager API"),Object(r.b)("h4",{id:"getrepositoryt-extends-ientityentityname-string--entityclasst-entityrepositoryt"},Object(r.b)("inlineCode",{parentName:"h4"},"getRepository<T extends IEntity>(entityName: string | EntityClass<T>): EntityRepository<T>")),Object(r.b)("p",null,"Returns ",Object(r.b)("inlineCode",{parentName:"p"},"EntityRepository")," for given entity, respects ",Object(r.b)("inlineCode",{parentName:"p"},"customRepository")," option of ",Object(r.b)("inlineCode",{parentName:"p"},"@Entity"),"\nand ",Object(r.b)("inlineCode",{parentName:"p"},"entityRepository")," option of ",Object(r.b)("inlineCode",{parentName:"p"},"MikroORM.init()"),"."),Object(r.b)("h4",{id:"findt-extends-ientityentityname-string--entityclasst-where-filterqueryt-options-findoptions-promiset"},Object(r.b)("inlineCode",{parentName:"h4"},"find<T extends IEntity>(entityName: string | EntityClass<T>, where?: FilterQuery<T>, options?: FindOptions): Promise<T[]>")),Object(r.b)("p",null,"Returns array of entities found for given condition. You can specify ",Object(r.b)("inlineCode",{parentName:"p"},"FindOptions")," to request\npopulation of referenced entities or control the pagination:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"export interface FindOptions {\n  populate?: string[];\n  orderBy?: { [k: string]: QueryOrder };\n  limit?: number;\n  offset?: number;\n}\n")),Object(r.b)("hr",null),Object(r.b)("h4",{id:"findt-extends-ientityentityname-string--entityclasst-where-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},Object(r.b)("inlineCode",{parentName:"h4"},"find<T extends IEntity>(entityName: string | EntityClass<T>, where?: FilterQuery<T>, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),Object(r.b)("p",null,"Same as previous ",Object(r.b)("inlineCode",{parentName:"p"},"find")," method, just with dedicated parameters for ",Object(r.b)("inlineCode",{parentName:"p"},"populate"),", ",Object(r.b)("inlineCode",{parentName:"p"},"orderBy"),", ",Object(r.b)("inlineCode",{parentName:"p"},"limit"),"\nand ",Object(r.b)("inlineCode",{parentName:"p"},"offset"),"."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"findonet-extends-ientityentityname-string--entityclasst-where-filterqueryt--string-populate-string-promiset--null"},Object(r.b)("inlineCode",{parentName:"h4"},"findOne<T extends IEntity>(entityName: string | EntityClass<T>, where: FilterQuery<T> | string, populate?: string[]): Promise<T | null>")),Object(r.b)("p",null,"Finds an entity by given ",Object(r.b)("inlineCode",{parentName:"p"},"where")," condition. You can use primary key as ",Object(r.b)("inlineCode",{parentName:"p"},"where")," value, then\nif the entity is already managed, no database call will be made. "),Object(r.b)("hr",null),Object(r.b)("h4",{id:"merget-extends-ientityentityname-string--entityclasst-data-entitydatat-t"},Object(r.b)("inlineCode",{parentName:"h4"},"merge<T extends IEntity>(entityName: string | EntityClass<T>, data: EntityData<T>): T")),Object(r.b)("p",null,"Adds given entity to current Identity Map. After merging, entity becomes managed.\nThis is useful when you want to work with cached entities. "),Object(r.b)("hr",null),Object(r.b)("h4",{id:"mapt-extends-ientityentityname-string--entityclasst-data-entitydatat-t"},Object(r.b)("inlineCode",{parentName:"h4"},"map<T extends IEntity>(entityName: string | EntityClass<T>, data: EntityData<T>): T")),Object(r.b)("p",null,"Maps raw DB result to entity, adding it to current Identity Map. Equivalent to\n",Object(r.b)("inlineCode",{parentName:"p"},"IDatabaseDriver.mapResult()")," followed by ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager.merge()"),"."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"getreferencet-extends-ientityentityname-string--entityclasst-id-string-t"},Object(r.b)("inlineCode",{parentName:"h4"},"getReference<T extends IEntity>(entityName: string | EntityClass<T>, id: string): T")),Object(r.b)("p",null,"Gets a reference to the entity identified by the given type and identifier without actually\nloading it, if the entity is not yet loaded."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"countentityname-string--entityclasst-where-any-promisenumber"},Object(r.b)("inlineCode",{parentName:"h4"},"count(entityName: string | EntityClass<T>, where: any): Promise<number>")),Object(r.b)("p",null,"Gets count of entities matching the ",Object(r.b)("inlineCode",{parentName:"p"},"where")," condition. "),Object(r.b)("hr",null),Object(r.b)("h4",{id:"persistentity-ientity--ientity-flush-boolean-promisevoid"},Object(r.b)("inlineCode",{parentName:"h4"},"persist(entity: IEntity | IEntity[], flush?: boolean): Promise<void>")),Object(r.b)("p",null,"Tells the EntityManager to make an instance managed and persistent. The entity will be\nentered into the database at or before transaction commit or as a result of the flush\noperation. You can control immediate flushing via ",Object(r.b)("inlineCode",{parentName:"p"},"flush")," parameter and via ",Object(r.b)("inlineCode",{parentName:"p"},"autoFlush"),"\nconfiguration option. "),Object(r.b)("hr",null),Object(r.b)("h4",{id:"persistandflushentity-ientity--ientity-promisevoid"},Object(r.b)("inlineCode",{parentName:"h4"},"persistAndFlush(entity: IEntity | IEntity[]): Promise<void>")),Object(r.b)("p",null,"Shortcut for ",Object(r.b)("inlineCode",{parentName:"p"},"persist")," & ",Object(r.b)("inlineCode",{parentName:"p"},"flush"),"."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"persistlaterentity-ientity--ientity-void"},Object(r.b)("inlineCode",{parentName:"h4"},"persistLater(entity: IEntity | IEntity[]): void")),Object(r.b)("p",null,"Shortcut for just ",Object(r.b)("inlineCode",{parentName:"p"},"persist"),", without flushing. "),Object(r.b)("hr",null),Object(r.b)("h4",{id:"flush-promisevoid"},Object(r.b)("inlineCode",{parentName:"h4"},"flush(): Promise<void>")),Object(r.b)("p",null,"Flushes all changes to objects that have been queued up to now to the database."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"removeentityname-string--entityclasst-where-ientity--any-flush-boolean-promisenumber"},Object(r.b)("inlineCode",{parentName:"h4"},"remove(entityName: string | EntityClass<T>, where: IEntity | any, flush?: boolean): Promise<number>")),Object(r.b)("p",null,"When provided entity instance as ",Object(r.b)("inlineCode",{parentName:"p"},"where")," value, then it calls ",Object(r.b)("inlineCode",{parentName:"p"},"removeEntity(entity, flush)"),",\notherwise it fires delete query with given ",Object(r.b)("inlineCode",{parentName:"p"},"where")," condition. "),Object(r.b)("p",null,"This method fires ",Object(r.b)("inlineCode",{parentName:"p"},"beforeDelete")," and ",Object(r.b)("inlineCode",{parentName:"p"},"afterDelete")," hooks only if you provide entity instance.  "),Object(r.b)("hr",null),Object(r.b)("h4",{id:"removeentityentity-ientity-flush-boolean-promisenumber"},Object(r.b)("inlineCode",{parentName:"h4"},"removeEntity(entity: IEntity, flush?: boolean): Promise<number>")),Object(r.b)("p",null,"Removes an entity instance. A removed entity will be removed from the database at or before\ntransaction commit or as a result of the flush operation. You can control immediate flushing\nvia ",Object(r.b)("inlineCode",{parentName:"p"},"flush")," parameter and via ",Object(r.b)("inlineCode",{parentName:"p"},"autoFlush")," configuration option."),Object(r.b)("p",null,"This method fires ",Object(r.b)("inlineCode",{parentName:"p"},"beforeDelete")," and ",Object(r.b)("inlineCode",{parentName:"p"},"afterDelete")," hooks.  "),Object(r.b)("hr",null),Object(r.b)("h4",{id:"removeandflushentity-ientity-promisevoid"},Object(r.b)("inlineCode",{parentName:"h4"},"removeAndFlush(entity: IEntity): Promise<void>")),Object(r.b)("p",null,"Shortcut for ",Object(r.b)("inlineCode",{parentName:"p"},"removeEntity")," & ",Object(r.b)("inlineCode",{parentName:"p"},"flush"),"."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"removelaterentity-ientity-void"},Object(r.b)("inlineCode",{parentName:"h4"},"removeLater(entity: IEntity): void")),Object(r.b)("p",null,"Shortcut for ",Object(r.b)("inlineCode",{parentName:"p"},"removeEntity")," without flushing. "),Object(r.b)("hr",null),Object(r.b)("h4",{id:"clear-void"},Object(r.b)("inlineCode",{parentName:"h4"},"clear(): void")),Object(r.b)("p",null,"Clears the EntityManager. All entities that are currently managed by this EntityManager\nbecome detached."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"canpopulateentityname-string--entityclasst-property-string-boolean"},Object(r.b)("inlineCode",{parentName:"h4"},"canPopulate(entityName: string | EntityClass<T>, property: string): boolean")),Object(r.b)("p",null,"Returns whether given entity has given property which can be populated (is reference or\ncollection)."),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/2.7/index#table-of-contents"}),"\u2190"," Back to table of contents")))}c.isMDXComponent=!0},807:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),c=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||r;return n?a.a.createElement(m,s(s({ref:t},b),{},{components:n})):a.a.createElement(m,s({ref:t},b))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var b=2;b<r;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);