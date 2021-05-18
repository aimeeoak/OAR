# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# andy = User.create(name: "Andy", email: "andy@lhl.com")
egg = User.create(name: "Egg Eggerson", email: "egg@egg.com")
spock = User.create(name: "Spock", email: "spock@vulcan.com")
boromir = User.create(name: "Boromir", email: "boromir@gondor.com")
faramir = User.create(name: "Faramir", email: "faramir@daddyissues.com")
geraldo = User.create(name: "Geraldo", email: "geraldo@riverdale.com")

javascript_project = Project.create(name: "Javascript Project", description: "Cool Educational Resources", user: egg)
spock_project = Project.create(name: "Star Trek Fanfiction", description: "sources for star trek fanfiction", user: spock)
boromir_project = Project.create(name: "Military History of Agincourt", description: "reasearching the battle of agincourt", user: boromir)
faramir_project = Project.create(name: "boss babes of rohan: fanfiction", description: "sources for lord of the rings fanfiction", user: faramir)
geraldo_project = Project.create(name: "Witchcraft?", description: "histroy of witchcraft and other assorted occupations in early modern europe", user: geraldo)
egg_project = Project.create(name: "Eggcellent Eggs", description: "papers about eggs", user: egg)


Article.create(title: "Type analysis for JavaScript", authors: "SH Jensen, A Møller, P Thiemann", language: "English", keywords: "javascript, types", content: "https://cs.au.dk/~amoeller/papers/tajs/paper.pdf", flagged: true, description:"Cool Description Here!", project: javascript_project) 
Article.create(title: "The essence of JavaScript", authors: "A Guha, C Saftoiu, S Krishnamurthi", language: "Javascript", keywords: "javascript", content: "https://arxiv.org/pdf/1510.00925", flagged: true, description:"Cool Description Here!", project: javascript_project) 
Article.create(title: "Sportification of Esports-A systematization of sport-teams entering the esports ecosystem", authors: "T Scholz, L Völkel, C Uebach", language: "English", keywords: "esports, valorant", content: "https://www.ijesports.org/article/48/html", flagged: false, description:"Cool Description Here!", project: javascript_project) 

Article.create(title: "Star Trek fandom as a religious phenomenon", authors: "M Jindra", language: "English", keywords: "star trek, religion", content: "https://www.academia.edu/download/34359763/STFandom_article_Jindra_SOR.pdf", flagged: true, description:"Cool Description Here!", project: spock_project) 
Article.create(title: "Going cultural: Star Trek, state action, and popular culture", authors: "J Weldes", language: "English", keywords: "star trek, popular culture, the state", content: "https://www.researchgate.net/profile/Jutta_Weldes/publication/224862176_Going_Cultural_Star_Trek_State_Action_and_Popular_Culture/links/5714caa408ae8b02e65df5ea.pdf", flagged: false, description:"Cool Description Here!",  project: spock_project) 
Article.create(title: "Charged-current and neutral-current event fraction determination based on fit vertices, time residuals and PMT hit angles for the Sudbury Neutrino …", authors: "Nally, Christian", language: "English", keywords: "sudbury, neutrino", content: "https://open.library.ubc.ca/collections/83l/831/items/1.0085138", flagged: true, description:"Cool Description Here!", project: spock_project) 
Article.create(title: "A history of astronomy", authors: "A Pannekoek", language: "English", keywords: "astronomy, history", content: "https://www.aaap.be/Pdf/Anton-Pannekoek/Pannekoek-en-1989-A-History-Of-Astronomy-01.pdf", flagged: false, project: spock_project) 
Article.create(title: "Fundamental astronomy", authors: "H Karttunen, P Kröger, H Oja, M Poutanen, KJ Donner", language: "English", keywords: "astronomy, fundementals", content: "http://eprints.ukh.ac.id/id/eprint/257/1/2017_Book_FundamentalAstronomy.pdf", flagged: true, description:"Cool Description Here!", project: spock_project) 

Article.create(title: "The History of the Battle of Agincourt: And of the Expedition of Henry the Fifth Into France; to which is Added, the Roll of the Men at Arms, in the English Army", authors: "NH Nicolas", language: "English", keywords: "agincourt, englihs army", content: "https://books.google.com/books?hl=en&lr=&id=kbgaAAAAYAAJ&oi=fnd&pg=PR1&dq=battle+of+agincourt&ots=lSC1tAN2Jj&sig=DeNnLDkC1a-HF0_AjdxaApsDusk", flagged: true, description:"Cool Description Here!", project: boromir_project) 
Article.create(title: "The Battle of Agincourt: An Alternative Location?", authors: "T Sutherland", language: "English", keywords: "agincourt, location", content: "https://www.academia.edu/download/31545774/Battle_Agincourt_Alternative_Location_Published__version_244-263.pdf", flagged: false, description:"Cool Description Here!", project: boromir_project) 
Article.create(title: "A Lying Legacy? A Preliminary Discussion of Images of Antiquity and Altered Reality in Medieval Military History", authors: "R Abels, S Morillo", language: "English", keywords: "medieval, military history", content: "https://www.academia.edu/download/2008505/Morillo_Lying_Legacy.pdf", flagged: true, project: boromir_project) 

Article.create(title: "Guide to the Names in The Lord of the Rings", authors: "JRR Tolkien", language: "English", keywords: "lotr, names", content: "http://www.tolkien.ro/text/JRR%20Tolkien%20-%20Guide%20to%20the%20Names%20in%20The%20Lord%20of%20the%20Rings.pdf", flagged: true, description:"Cool Description Here!", project: faramir_project) 
Article.create(title: "Middle‐earth Meets New Zealand: Authenticity and Location in the Making of The Lord of the Rings", authors: "D Jones, K Smith", language: "English", keywords: "lotr, film, peter jackson, new zealand", content: "https://www.academia.edu/download/50873943/j.1467-6486.2005.00527.x20161213-26558-qg9o3m.pdf", flagged: false, description:"Cool Description Here!", project: faramir_project) 
Article.create(title: "JRR Tolkien, Fanfiction, and  'the Freedom of the Reader'", authors: "MB Abrahamson", language: "English", keywords: "jrrt, fanfiction", content: "http://dc.swosu.edu/cgi/viewcontent.cgi?article=1086&context=mythlore", flagged: true, project: faramir_project) 
Article.create(title: "Critically examining the use of blog-based fanfiction in the advanced language classroom", authors: "S Sauro, B Sundmark", language: "English", keywords: "fanfiction", content: "https://www.academia.edu/download/57390836/SauroSundmarkInPressAE.pdf", flagged: false, description:"Cool Description Here!", project: faramir_project) 
Article.create(title: "Affirmational and Transformational Values and Practices in the Tolkien Fanfiction Community", authors: "DM Walls-Thumma", language: "English", keywords: "lotr, fanfiction", content: "https://scholar.valpo.edu/cgi/viewcontent.cgi?article=1150&context=journaloftolkienresearch", flagged: true, description:"Cool Description Here!", project: faramir_project) 
Article.create(title: "Fanfiction and the author: How fanfic changes popular cultural texts", authors: "J Fathallah", language: "English", keywords: "fanfic, cultraul texts", content: "https://library.oapen.org/bitstream/handle/20.500.12657/25984/1004097.pdf?sequence=1", flagged: true, description:"Cool Description Here!", project: faramir_project) 

Article.create(title: "Oedipus and the devil: witchcraft, religion and sexuality in early modern Europe", authors: "L Roper", language: "English", keywords: "withcraft, sexuality", content: "http://courses.washington.edu/hsteu305/Roper%20WC%20and%20Fantasy.PDF", flagged: true, description:"Cool Description Here!", project: geraldo_project) 
Article.create(title: "Witchcraft and Gender in Early Modern Europe", authors: "A Rowlands", language: "English", keywords: "witchcraft, gender", content: "https://www.oxfordhandbooks.com/view/10.1093/oxfordhb/9780199578160.001.0001/oxfordhb-9780199578160-e-26?result=346&rskey=UhJwgJ&mediaType=Article", flagged: true, description:"Cool Description Here!", project: geraldo_project) 
Article.create(title: "Magic and technology in early modern Europe", authors: "A Grafton", language: "English", keywords: "magic, technology, early modern europe", content: "https://repository.si.edu/bitstream/handle/10088/7193/Grafton_2002.pdf", flagged: false, description:"Cool Description Here!", project: geraldo_project) 
Article.create(title: "Magic as a State of Mind?: Neurocognitive Theory and Magic in Early Modern Europe", authors: "J Sørensen", language: "English", keywords: "magic, neuroscience", content: "https://www.academia.edu/download/45092638/Sorensen_2010.pdf", flagged: false, description:"Cool Description Here!", project: geraldo_project)  

Article.create(title: "Molecular cooking: physical transformations in Chinese 'century' eggs", authors: "E Eiser, CS Miles, N Geerts, P Verschuren…", language: "English", keywords: "eggs", content: "https://www.researchgate.net/profile/Peter_Verschuren/publication/248842695_Molecular_cooking_Physical_transformations_in_Chinese_%27century%27_eggs/links/551d25680cf23e2801fe0326.pdf", flagged: true, project: egg_project)  
Article.create(title: "Effect of cooking methods and intestinal conditions on lipolysis, proteolysis and xanthophylls bioaccessibility of eggs", authors: "A Asensio-Grau, I Peinado, A Heredia", language: "English", keywords: "eggs", content: "https://riunet.upv.es/bitstream/handle/10251/116153/Author%20Version.pdf?sequence=7", flagged: false, project: egg_project)  
Article.create(title: "Hard-cooking and pickling eggs as teaching aids", authors: "AJ Maurer", language: "English", keywords: "eggs", content: "https://www.sciencedirect.com/science/article/pii/S0032579119553597/pdf?md5=679e3788fa564e5952a441be18549339&pid=1-s2.0-S0032579119553597-main.pdf", flagged: true, project: egg_project)  