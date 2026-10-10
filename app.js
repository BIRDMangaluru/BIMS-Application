const ORG_TYPES=['RCB - DCCB or State Co-operative Bank','RRB - Regional Rural Bank','Commercial Bank','Private Sector Bank','Small Finance Bank','Urban Co-operative Banks','NGO','FPO - Farmers Producer Company/ Organisation','Government Departments','NABARD','NABARD Subsidiary','Others'];
const GENDERS=['Male','Female','Non-binary'];
const CATEGORIES=['General','OBC','SC','ST','Other','Not willing to Disclose'];
const PROG_TYPES=['Sponsored','Customised'];
const FAC_DESIGS=['Director','Joint Director','Deputy Director','Assistant Director','Faculty Member','Guest Faculty','Consultant','Other'];
const TARGET_GROUPS_DEFAULT=['RCBs','RRBs','Commercial Banks','Govt. Depts.','NBFCs','Farmers Collectives','CBBOs','FPOs','OFPOs','CSR Wings','Trusts','Societies','SHG Federations','Section 8 Companies','FLC Counsellors','MFIs','SFBs','All Banks'];
const BLACKLIST_REASONS=['Poor performance in the programme','Misconduct during the programme','Irregular attendance / absenteeism','Violation of institute rules','Damage to institute property','Misbehaviour with faculty or staff','Repeated nomination without attending','Submission of false information','Other (specify below)'];
const RATE4=['Excellent','Good','Satisfactory','Not Adequate'];
const UTIL3=['Very Useful','Occasionally Useful','Not Useful'];
const INFRA4=['Excellent','Very Good','Good','Poor'];
const YESNO=['Yes','No'];
const FB_RATE_Q=['Comments on the training programme - Programme Contents / Coverage','Comments on the training programme - Training Methodology','Comments on the training programme - Reading Material','Comments on the training programme - Overall Impression'];
const FB_RATE_SHORT=['Programme Contents / Coverage','Training Methodology','Reading Material','Overall impression'];
const FB_UTIL_Q=['Utility of the Programme – Yourself','Utility of the Programme – Your Organisation','Utility of the Programme – Programme Contents / Coverage'];
const FB_SESSIONS=(function(){const a=[];for(let d=1;d<=3;d++)for(let s=1;s<=4;s++)a.push('Day – '+d+' – Session – '+s);return a;})();
const FB_IMPRESSION='Comments on the training programme - Overall Impression';
const SPONSOR_DEPTS=['Department of Supervision','Farm Sector Development Department','Rural MSME Department','Department of Climate Action & Sustainability','Department of Microfinance & Financial Inclusion','Strategic Planning & Product Innovation Department','Department of Data Management Analytics and Business Intelligence','Department of Refinance','Institutional Development Department','Co-operative Sector Development Department','Other'];
const DEPT_ABBR={'Department of Supervision':'DOS','Farm Sector Development Department':'FSDD','Rural MSME Department':'RMSMED','Department of Climate Action & Sustainability':'DCAS','Department of Microfinance & Financial Inclusion':'DMFI','Strategic Planning & Product Innovation Department':'SPPID','Department of Data Management Analytics and Business Intelligence':'DDMABI','Department of Refinance':'DOR','Institutional Development Department':'IDD','Co-operative Sector Development Department':'CSDD','Customised':'Customised','Others':'Others'};
const PROPOSED_DEFAULT=[
 {dept:'Department of Supervision',name:'IT Management and Governance for Board of Directors and Senior Management of RCBs',days:3,count:2,tg:['RCBs']},
 {dept:'Department of Supervision',name:'Training Programme on Internal Audit for Internal & Concurrent Auditors of RCBs',days:3,count:1,tg:['RCBs']},
 {dept:'Department of Supervision',name:'Integrated ALM & Stress Testing Framework – Macro & Micro Dimensions',days:3,count:2,tg:['RCBs','RRBs']},
 {dept:'Department of Supervision',name:'Treasury Transformation for Cooperative and Rural Banks: Innovation with Compliance',days:3,count:2,tg:['RCBs','RRBs']},
 {dept:'Department of Supervision',name:'Training Programme on SARFAESI/ DRT Matters and Legal Implications',days:3,count:1,tg:['All Banks']},
 {dept:'Department of Supervision',name:'Strengthening Financial Discipline in RRBs and RCBs: Accounting Standards, IRAC Norms & Taxation',days:3,count:2,tg:['RRBs','RCBs']},
 {dept:'Department of Supervision',name:'Risk Intelligence for Banks: Managing Credit, Market, Operational & Fraud Risks Effectively',days:3,count:2,tg:['All Banks']},
 {dept:'Department of Supervision',name:'Digital Fortification: Advanced Cyber Risk Management & Regulatory Compliance',days:3,count:1,tg:['All Banks','SFBs']},
 {dept:'Department of Supervision',name:'Enhanced CAMELSC: A Step Towards Risk-Based Supervision and Compliance',days:3,count:1,tg:['RCBs','RRBs']},
 {dept:'Department of Supervision',name:'Effective Utilisation of ENSURE for MIS, Off-site Surveillance and Sustainable Compliance to NABARD Inspection',days:3,count:1,tg:['RCBs','RRBs']},
 {dept:'Farm Sector Development Department',name:'Krishi Mangal – Integration with Global Value Chains',days:3,count:1,tg:['FPOs','Farmers Collectives','CBBOs']},
 {dept:'Rural MSME Department',name:'Project Appraisal, Entrepreneurial Assessment and Financing of Micro, Small and Medium Enterprises',days:4,count:2,tg:['All Banks','SFBs']},
 {dept:'Rural MSME Department',name:'Agri-Rural Startup Immersion Programme',days:3,count:2,tg:['FPOs','Farmers Collectives','Section 8 Companies']},
 {dept:'Rural MSME Department',name:'Practical Technologies for Micro Food Enterprises (CFTRI/NIFTEM)',days:3,count:2,tg:['FPOs','OFPOs','SHG Federations']},
 {dept:'Rural MSME Department',name:'Programme on Applied Entrepreneurial Skills – Planning, Marketing, Branding, Packaging for micro entrepreneurs',days:3,count:3,tg:['SHG Federations','FPOs','Farmers Collectives']},
 {dept:'Department of Climate Action & Sustainability',name:'Programme on Green Credit, Carbon Market Mechanism',days:3,count:2,tg:['All Banks','CSR Wings']},
 {dept:'Department of Climate Action & Sustainability',name:'Programme on ESG and Sustainable Finance',days:3,count:1,tg:['Commercial Banks','SFBs']},
 {dept:'Department of Climate Action & Sustainability',name:'Introductory Programme on climate risk management',days:3,count:1,tg:['All Banks']},
 {dept:'Department of Climate Action & Sustainability',name:'Programme on Agri Value Chain and Climate Resilient agriculture financing and marketing',days:3,count:2,tg:['RRBs','RCBs','FPOs']},
 {dept:'Department of Climate Action & Sustainability',name:'Greening the banking sector- Green Finance, Investments and appraisal of Green Projects',days:3,count:2,tg:['All Banks']},
 {dept:'Department of Climate Action & Sustainability',name:'Executive Programme on Climate Resilient agriculture financing',days:3,count:1,tg:['Commercial Banks','RRBs']},
 {dept:'Department of Microfinance & Financial Inclusion',name:'Programme on Promotion and Development of Micro Enterprises',days:3,count:2,tg:['SHG Federations','MFIs','NBFCs']},
 {dept:'Department of Microfinance & Financial Inclusion',name:'Financial Inclusion for VIKSIT BHARAT - Capacity Building of Change Agents',days:3,count:2,tg:['FLC Counsellors','SHG Federations']},
 {dept:'Department of Microfinance & Financial Inclusion',name:'Programme on FinTech Immersion for Rural Bankers',days:3,count:2,tg:['RRBs','RCBs','SFBs']},
 {dept:'Strategic Planning & Product Innovation Department',name:'Technology Upgradation in Cooperatives - Sahakar Sarathi Initiative',days:2,count:4,tg:['RCBs','Societies']},
 {dept:'Department of Data Management Analytics and Business Intelligence',name:'Programme on AI, ChatGPT and Data Analytics for Cooperative Banks and RRBs',days:3,count:2,tg:['RCBs','RRBs']},
 {dept:'Department of Refinance',name:'Agriculture Project Appraisal, Management and Credit Score Based Retail Lending',days:4,count:2,tg:['All Banks']},
 {dept:'Department of Refinance',name:'Strengthening Rural Credit Flow – Potential and Opportunities',days:3,count:2,tg:['RRBs','RCBs','Commercial Banks']},
 {dept:'Institutional Development Department',name:'Exposure Programme for Officers of RFIs of North, Eastern & North Eastern Regions',days:3,count:2,tg:['RRBs','RCBs']},
 {dept:'Institutional Development Department',name:'Executive Development Programme for Senior Officials of Cooperatives',days:3,count:2,tg:['RCBs','Societies']},
 {dept:'Institutional Development Department',name:'Training programme on building new products and services',days:3,count:2,tg:['All Banks']},
 {dept:'Institutional Development Department',name:'Reimagining Cooperatives – building successful cooperatives',days:3,count:2,tg:['RCBs','Societies','Trusts']},
 {dept:'Institutional Development Department',name:'Programme on Strategic Planning and Market Share Improvement for Cooperatives',days:3,count:2,tg:['RCBs']},
 {dept:'Institutional Development Department',name:'Outbound programme for senior managers of Cooperatives',days:3,count:1,tg:['RCBs']},
 {dept:'Institutional Development Department',name:'Programme on Digital Innovation, Transformation and Change Leadership for Cooperatives',days:3,count:2,tg:['RCBs','SFBs']},
 {dept:'Co-operative Sector Development Department',name:'Fostering Collaboration and Growth in Allied Sector – Unleashing Power of Cooperation Amongst Cooperatives, extension and support programmes',days:3,count:2,tg:['Societies','Farmers Collectives','FPOs']},
 {dept:'Customised',name:'Customised Programme',days:0,count:20,tg:['All Banks','Govt. Depts.']}];
const FACULTY_DEFAULT=[
 {name:'Sheela M Bhandarkar',desig:'DGM/FM',email:'sheela.bhandarkar@bird.org.in',mobile:'9845011001',expertise:'Micro Enterprises, Entrepreneurship',status:'Active'},
 {name:'Shakti P Mohapatra',desig:'Faculty Member',email:'shakti.mohapatra@bird.org.in',mobile:'9845011002',expertise:'ALM, Risk Management',status:'Active'},
 {name:'P R Thomas',desig:'DGM/FM',email:'pr.thomas@bird.org.in',mobile:'9845011003',expertise:'Financial Inclusion, Microfinance',status:'Active'},
 {name:'E Prathap',desig:'Faculty Member',email:'e.prathap@bird.org.in',mobile:'9845011004',expertise:'Agri Value Chains, Marketing',status:'Active'},
 {name:'K Satheesan',desig:'Faculty Member',email:'k.satheesan@bird.org.in',mobile:'9845011005',expertise:'Supervision, Audit & Compliance',status:'Active'},
 {name:'M S Suvarna',desig:'AGM/FM',email:'ms.suvarna@bird.org.in',mobile:'9845011006',expertise:'Project Appraisal, Refinance',status:'Active'},
 {name:'Yogesh S L',desig:'Faculty Member',email:'yogesh.sl@bird.org.in',mobile:'9845011007',expertise:'Cooperatives, Micro Credit',status:'Active'},
 {name:'Naveenkumar H S',desig:'Deputy Director',email:'naveenkumar.hs@bird.org.in',mobile:'9845011008',expertise:'Digital Banking, Cyber Security',status:'Active'},
 {name:'Sagar H R L',desig:'Assistant Director',email:'sagar.hrl@bird.org.in',mobile:'9845011009',expertise:'Financial Analysis, RRBs',status:'Active'},
 {name:'Karthigeyan M G',desig:'Assistant Director',email:'karthigeyan.mg@bird.org.in',mobile:'9845011010',expertise:'Training Administration, MSME',status:'Active'}];
const STATES_UT=['Andaman and Nicobar Islands','Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh','Chhattisgarh','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Ladakh','Lakshadweep','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Puducherry','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'];
window.ORG_NAMES=['State Bank of India','Bank of Baroda','Canara Bank','Central Bank of India','Indian Bank','Punjab National Bank','Union Bank of India','Axis Bank','Federal Bank','HDFC Bank','ICICI Bank','Kotak Mahindra Bank','South Indian Bank','Karnataka Bank','AU Small Finance Bank','Equitas Small Finance Bank','Ujjivan Small Finance Bank','Andhra Pragathi Grameena Bank','Aryavart Bank','Baroda UP Bank','Karnataka Gramin Bank','Karnataka Vikas Grameena Bank','Kerala Gramin Bank','Maharashtra Gramin Bank','Odisha Gramya Bank','Prathama UP Gramin Bank','Rajasthan Marudhara Gramin Bank','Saptagiri Grameena Bank','Tamil Nadu Grama Bank','Telangana Grameena Bank','Uttar Bihar Gramin Bank','NABARD','NABARD Financial Services Ltd (NABFINS)','NABKISAN Finance Ltd','The Karnataka State Co-operative Apex Bank','The Kerala State Co-operative Bank','The Maharashtra State Co-operative Bank','The Andhra Pradesh State Co-operative Bank','The Tamil Nadu State Apex Co-operative Bank'].sort((a,b)=>a.localeCompare(b));
const DB_KEY='birdm_v22';
let ROLE='Admin',USER='admin';
let SEL={registration:null,assessment:null,feedback:null,programmes:null};
let SUB='',FY='',SCOREVIEW='Consolidated',USUB='Users';
let PSORT={programmes:'new',registration:'new',assessment:'new',feedback:'new'};
let PFILT={programmes:{mode:'All',ptype:'All',sdept:'All',tg:'All',date:'',endDate:'',search:''},registration:{mode:'All',ptype:'All',sdept:'All',tg:'All',date:'',endDate:'',search:''},assessment:{mode:'All',ptype:'All',sdept:'All',tg:'All',date:'',endDate:'',search:''},feedback:{mode:'All',ptype:'All',sdept:'All',tg:'All',date:'',endDate:'',search:''}};
let CFILT={dept:'All',ptype:'All',search:''};
let PDBQ='',PDBFY='ALL',PDBSTATUS='All',EXPPROG='';
let TGSEL=[];
let CURPAGE='dashboard';
let TSORT={};
let SSVIEW='pending';
let PENDIMPORT=null;   /* holds a parsed sheet awaiting the Replace/Add choice */
const FILLER_WORDS=['nil','na','n/a','n.a.','no','none','nothing','notapplicable','notrequired',
 'nocomment','nocomments','nosuggestion','nosuggestions','noremarks','noresponse',
 'nothingspecific','nothingtosay','notany','null','naa','nan','nill','nnil',
 'notmentioned','notspecified','noidea','x','xx','xxx','n','a','0','00'];
function isFiller(v){
 let s=(''+(v==null?'':v)).trim();
 if(s==='')return true;
 if(s==='—'||s==='–')return true;
 const key=s.toLowerCase().replace(/[\s.,\-_*\/\\()\[\]:;'"!?]+/g,'');
 if(key==='')return true;
 return FILLER_WORDS.indexOf(key)>=0;}
function commentList(arr,key,limit){
 const m=new Map();
 (arr||[]).forEach(x=>{
  const raw=((x&&x[key]!=null)?(''+x[key]):'').trim();
  if(isFiller(raw))return;
  const k=raw.toLowerCase().replace(/\s+/g,' ');
  if(m.has(k))m.get(k).n++; else m.set(k,{text:raw,n:1});});
 const out=[...m.values()].sort((a,b)=>(b.n-a.n)||a.text.localeCompare(b.text));
 return (limit&&out.length>limit)?out.slice(0,limit):out;}
function commentRespondents(arr,key){let n=0;(arr||[]).forEach(x=>{const raw=((x&&x[key]!=null)?(''+x[key]):'').trim();if(!isFiller(raw))n++;});return n;}
/* ===================== DUPLICATE-RESPONSE GUARD =====================
   A response row is fingerprinted from its answers. Identical rows within the
   same programme are duplicates — they inflate every count and every comment
   multiplier while leaving the percentages unchanged, which is exactly the
   symptom seen when the same sheet is uploaded more than once.            */
function respFingerprint(ans,labels){
 const keys=(labels&&labels.length)?labels:Object.keys(ans||{}).sort();
 return keys.map(l=>(''+((ans&&ans[l]!=null)?ans[l]:'')).trim().toLowerCase().replace(/\s+/g,' ')).join('\u0001');}
function formLabels(id,kind){return ((DB.forms[id]&&DB.forms[id][kind])||[]).map(f=>f.label);}
function dupInfo(id,kind){
 const store=(DB.responses[id]&&DB.responses[id][kind])||[];
 const labels=formLabels(id,kind);const seen=new Set();let dup=0;
 store.forEach(r=>{const k=respFingerprint(r.answers,labels);if(seen.has(k))dup++;else seen.add(k);});
 return {total:store.length,unique:seen.size,dup:dup};}
function removeDuplicates(id,kind){
 const store=(DB.responses[id]&&DB.responses[id][kind])||[];
 const labels=formLabels(id,kind);const seen=new Set();const keep=[];let removed=0;
 store.forEach(r=>{const k=respFingerprint(r.answers,labels);
  if(seen.has(k)){removed++;return;}seen.add(k);keep.push(r);});
 DB.responses[id][kind]=keep;save();return removed;}
function dupTotals(kind){let progs=0,rows=0;
 DB.programmes.forEach(p=>{const d=dupInfo(p.id,kind);if(d.dup){progs++;rows+=d.dup;}});
 return {progs,rows};}
function tsGet(k){return TSORT[k]||null;}
function tsSet(k,col,dir){if(dir===null)delete TSORT[k];else TSORT[k]={col:col,dir:dir};}
function sortVal(v){if(v==null)return '';let s=(''+v).trim();if(s===''||s==='—')return '';
 const m=s.match(/^(-?[\d,]+(?:\.\d+)?)\s*(?:\/\s*[\d.]+)?\s*%?$/);
 if(m){const n=parseFloat(m[1].replace(/,/g,''));if(!isNaN(n))return n;}
 const d=s.match(/^(\d{2})-(\d{2})-(\d{4})$/);if(d)return +(d[3]+d[2]+d[1]);
 const i=s.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(i)return +(i[1]+i[2]+i[3]);
 return s.toLowerCase();}
function sortRows(rows,col,dir,getter){
 const idx=rows.map((r,i)=>({r,i,v:sortVal(getter(r,col))}));
 idx.sort((a,b)=>{const av=a.v,bv=b.v;const ae=(av===''),be=(bv==='');
  if(ae&&be)return a.i-b.i;if(ae)return 1;if(be)return -1;
  let c;if(typeof av==='number'&&typeof bv==='number')c=av-bv;
  else c=(''+av).localeCompare(''+bv,undefined,{numeric:true,sensitivity:'base'});
  if(c===0)return a.i-b.i;return dir==='desc'?-c:c;});
 return idx.map(x=>x.r);}
function sortableTH(key,col,label,extra){const st=tsGet(key);const on=(st&&st.col===col);
 const ar=on?(st.dir==='asc'?'▲':'▼'):'⇅';
 return '<th class="sortable'+(on?' on':'')+'" '+(extra||'')+' onclick="sortMenu(event,\''+key+'\','+col+',\''+esc(label).replace(/'/g,"\\'")+'\')" title="Click to sort">'+label+'<span class="sarrow">'+ar+'</span></th>';}
function closeSortMenu(){const m=document.getElementById('sortmenu');if(m)m.remove();}
document.addEventListener('click',function(e){const m=document.getElementById('sortmenu');if(m&&!m.contains(e.target)&&!(e.target.closest&&e.target.closest('th.sortable')))closeSortMenu();});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeSortMenu();});
function sortMenu(ev,key,col,label){ev.stopPropagation();closeSortMenu();
 const st=tsGet(key);const cur=(st&&st.col===col)?st.dir:null;
 const d=document.createElement('div');d.className='sortmenu';d.id='sortmenu';
 d.innerHTML='<div class="hd">Sort · '+esc(label)+'</div>'+
  '<button class="'+(cur==='asc'?'on':'')+'" onclick="applySort(\''+key+'\','+col+',\'asc\')"><span class="ic">▲</span> Sort A → Z / Low → High</button>'+
  '<button class="'+(cur==='desc'?'on':'')+'" onclick="applySort(\''+key+'\','+col+',\'desc\')"><span class="ic">▼</span> Sort Z → A / High → Low</button>'+
  (cur?'<div class="sep"></div><button onclick="applySort(\''+key+'\','+col+',null)"><span class="ic">✕</span> Clear sort</button>':'');
 document.body.appendChild(d);
 const r=ev.currentTarget.getBoundingClientRect();
 let left=r.left,top=r.bottom+4;const w=d.offsetWidth||214,h=d.offsetHeight||110;
 if(left+w>window.innerWidth-10)left=Math.max(10,window.innerWidth-w-10);
 if(top+h>window.innerHeight-10)top=Math.max(10,r.top-h-4);
 d.style.left=left+'px';d.style.top=top+'px';}
function applySort(key,col,dir){tsSet(key,col,dir);closeSortMenu();
 const pg=(key.split('|')[0]||'').trim();
 if(pg&&RENDER[pg])render(pg);else render(CURPAGE);}
function stdRegForm(){return [
 {label:'Name',type:'Short text',options:[],required:true},
 {label:'Designation',type:'Short text',options:[],required:true},
 {label:'Organisation Type',type:'Dropdown',options:ORG_TYPES.slice(),required:true},
 {label:'Gender',type:'Dropdown',options:GENDERS.slice(),required:true},
 {label:'Category',type:'Dropdown',options:CATEGORIES.slice(),required:true},
 {label:'Name of the Organisation / Institute / Bank',type:'SearchDropdown',options:[],required:true},
 {label:'State / Union Territory',type:'Dropdown',options:STATES_UT.slice(),required:true},
 {label:'Age (in Years)',type:'Number',options:[],required:true},
 {label:'Mobile Number',type:'Number',options:[],required:true},
 {label:'e-mail ID',type:'Short text',options:[],required:true},
 {label:'Nature of present duties and assignments',type:'Short text',options:[],required:false},
 {label:'Name of contact person (emergency)',type:'Short text',options:[],required:false},
 {label:'Mobile number of contact person (emergency)',type:'Number',options:[],required:false}];}
function stdFeedbackForm(){const f=[{label:'Name',type:'Participant',options:[],required:true}];
 FB_RATE_Q.forEach(q=>f.push({label:q,type:'Dropdown',options:RATE4.slice(),required:true}));
 f.push({label:'If In Adequate, please give suggestion for improvement',type:'Short text',options:[],required:false});
 f.push({label:'Keeping in view the objectives of the programme, additional topic(s) to be included',type:'Short text',options:[],required:false});
 f.push({label:'Keeping in view the objectives of the programme, Existing topic(s) to be excluded',type:'Short text',options:[],required:false});
 FB_UTIL_Q.forEach(q=>f.push({label:q,type:'Dropdown',options:UTIL3.slice(),required:true}));
 f.push({label:'If not useful, why?',type:'Short text',options:[],required:false});
 f.push({label:'Comments on the duration of the programme: Whether Adequate?',type:'Dropdown',options:YESNO.slice(),required:true});
 f.push({label:'If No, Number of days suggested',type:'Short text',options:[],required:false});
 f.push({label:'Name Important Learning Points for the programme',type:'Short text',options:[],required:false});
 f.push({label:'Please specify the steps/ action you propose to take to utilize the learning at your workplace',type:'Short text',options:[],required:false});
 f.push({label:'Comments on Infrastructure facilities – Boarding',type:'Dropdown',options:INFRA4.slice(),required:true});
 f.push({label:'Required Improvements, if any (Boarding)',type:'Short text',options:[],required:false});
 f.push({label:'Comments on Infrastructure facilities - Lodging',type:'Dropdown',options:INFRA4.slice(),required:true});
 f.push({label:'Required Improvements, if any (Lodging)',type:'Short text',options:[],required:false});
 f.push({label:'Other Suggestions relating to the programme, if any',type:'Short text',options:[],required:false});
 FB_SESSIONS.forEach(s=>f.push({label:s,type:'Dropdown',options:RATE4.slice(),required:false}));
 return f;}
function stdQuiz(){return [{q:'The Cash Reserve Ratio (CRR) is maintained with?',opts:['SEBI','RBI','NABARD','Ministry of Finance'],ans:1,points:1},{q:'Priority Sector Lending target for RRBs is generally?',opts:['40%','60%','75%','100%'],ans:2,points:1},{q:'PACS stands for?',opts:['Primary Agricultural Credit Society','Public Agri Cooperative Scheme','Priority Agri Credit System','Primary Account Credit Society'],ans:0,points:1},{q:'NABARD was established in the year?',opts:['1975','1982','1991','2005'],ans:1,points:1}];}
function qPoints(q){return (q&&q.points!=null)?+q.points:1;}
function pType(p){return (p&&p.ptype)?p.ptype:'Sponsored';}
function pDept(p){return (p&&p.sdept)?p.sdept:'';}
function pTG(p){return (p&&Array.isArray(p.tg))?p.tg:[];}
function progDeptBucket(p){return (pType(p)==='Customised')?'Customised':(pDept(p)||'Others');}
function aName(a){a=a||{};return (a['Name']||a['Full Name']||'').trim();}
function aMobile(a){a=a||{};return (a['Mobile Number']||'').trim();}
function aOrg(a){a=a||{};return (a['Name of the Organisation / Institute / Bank']||'—');}
function aOrgType(a){a=a||{};return (a['Organisation Type']||'—');}
function aState(a){a=a||{};return (a['State / Union Territory']||'—');}
function aGender(a){a=a||{};return (a['Gender']||'—');}
function aCategory(a){a=a||{};return (a['Category']||'—');}
function aEmail(a){a=a||{};return (a['e-mail ID']||'—');}
function aDesig(a){a=a||{};return (a['Designation']||'—');}
function inr(n){n=+n||0;return '₹'+n.toLocaleString('en-IN');}
function nf(n){n=+n||0;return (Math.round(n*100)/100).toString();}
function esc(s){return (''+(s==null?'':s)).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function tgChips(list,max){list=list||[];if(!list.length)return '<span style="color:var(--muted)">—</span>';const show=(max&&list.length>max)?list.slice(0,max):list;let h='<span class="tgwrap">'+show.map(t=>'<span class="tgchip">'+t+'</span>').join('');if(max&&list.length>max)h+='<span class="tgchip" style="background:var(--bg);color:var(--muted)">+'+(list.length-max)+'</span>';return h+'</span>';}
function grBands(sc,tot){const w=(+tot||10)/4;const c=[0,0,0,0];(sc||[]).forEach(s=>{let i=Math.ceil((+s||0)/w)-1;i=Math.min(3,Math.max(0,i));c[i]++;});const mids=[0,1,2,3].map(i=>(i+0.5)*w);const s2=c.map((n,i)=>n*mids[i]);const t=c.reduce((a,b)=>a+b,0);const sum=s2.reduce((a,b)=>a+b,0);const labels=[0,1,2,3].map(i=>{const lo=(i===0)?0:(i*w+(Number.isInteger(w)?1:0));return nf(lo)+' - '+nf((i+1)*w);});return {w,counts:c,mids,scores:s2,total:t,sum,avg:t?sum/t:0,labels};}
function gainRatio(id){const t=(DB.responses[id]&&DB.responses[id].tests)||[];const en=t.filter(x=>x.type==='Entry'),ex=t.filter(x=>x.type==='Exit');const mx=Math.max(10,...t.map(x=>+x.total||0));const E=grBands(en.map(x=>+x.score||0),mx),X=grBands(ex.map(x=>+x.score||0),mx);const gr=(E.avg>0)?((X.avg-E.avg)/E.avg):null;return {maxT:mx,E,X,gr,ok:(en.length>0&&ex.length>0)};}
function grCard(id){const g=gainRatio(id);if(!g.ok)return '<div class="grbox"><div><div class="gl">📈 Gain Ratio (weighted average method)</div><div style="font-size:13px;color:var(--muted);margin-top:4px">Entry and Exit scores are both required.</div></div></div>';
 return '<div class="grbox"><div><div class="gl">📈 GAIN RATIO <span style="font-weight:400">(weighted average method)</span></div><div class="gv">'+(g.gr*100).toFixed(2)+'%</div></div><button class="btn sm sec" onclick="grDetail(\''+id+'\')">View calculation</button></div>';}
function grDetail(id){const g=gainRatio(id);const p=prog(id);if(!g.ok){toast('Entry and Exit scores required');return;}
 const rows=[0,1,2,3].map(i=>'<tr><td><b>'+g.E.labels[i]+'</b></td><td style="text-align:center">'+g.E.counts[i]+'</td><td style="text-align:right">'+g.E.scores[i].toFixed(2)+'</td><td style="text-align:center">'+g.X.counts[i]+'</td><td style="text-align:right">'+g.X.scores[i].toFixed(2)+'</td></tr>').join('');
 openModal('<button class="x" onclick="closeModal()">✕</button><h3>📈 Gain Ratio — Calculation</h3><p style="color:var(--muted);font-size:13px;margin-top:6px"><b>'+p.name+'</b> <span class="pill">'+p.id+'</span></p><div class="grbox mt"><div><div class="gl">📈 GAIN RATIO</div><div class="gv">'+(g.gr*100).toFixed(2)+'%</div><div style="font-size:12.5px;color:var(--muted);margin-top:4px">= ('+g.X.avg.toFixed(2)+' − '+g.E.avg.toFixed(2)+') ÷ '+g.E.avg.toFixed(2)+' · '+(g.gr*100).toFixed(2)+'% improvement</div></div><div style="display:flex;gap:22px;flex-wrap:wrap"><div class="gcell"><div class="n">'+g.E.avg.toFixed(2)+'</div><div class="gl">Entry weighted avg.</div></div><div class="gcell"><div class="n">'+g.X.avg.toFixed(2)+'</div><div class="gl">Exit weighted avg.</div></div><div class="gcell"><div class="n">'+g.E.total+' / '+g.X.total+'</div><div class="gl">Entry / Exit count</div></div></div></div><div class="mt" style="overflow:auto"><table><thead><tr><th rowspan="2" style="vertical-align:bottom">Score Band</th><th colspan="2" style="text-align:center">Entry level</th><th colspan="2" style="text-align:center">Exit level</th></tr><tr><th style="text-align:center">Number</th><th style="text-align:right">Score</th><th style="text-align:center">Number</th><th style="text-align:right">Score</th></tr></thead><tbody>'+rows+'</tbody><tfoot><tr><td>Total</td><td style="text-align:center">'+g.E.total+'</td><td style="text-align:right">'+g.E.sum.toFixed(2)+'</td><td style="text-align:center">'+g.X.total+'</td><td style="text-align:right">'+g.X.sum.toFixed(2)+'</td></tr><tr><td>Weighted avg. score</td><td colspan="2" style="text-align:right">'+g.E.avg.toFixed(2)+'</td><td colspan="2" style="text-align:right">'+g.X.avg.toFixed(2)+'</td></tr><tr><td>Gain Ratio</td><td colspan="4" style="text-align:right;font-size:16px;color:var(--green-d)">'+(g.gr*100).toFixed(2)+'%</td></tr></tfoot></table></div>',true);}
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function seed(){
 const RND=mulberry32(20260731);
 const pick=a=>a[Math.floor(RND()*a.length)];
 const wpick=p=>{let t=p.reduce((s,x)=>s+x[1],0),r=RND()*t;for(const[v,w]of p){if((r-=w)<0)return v;}return p[0][0];};
 const ir=(lo,hi)=>lo+Math.floor(RND()*(hi-lo+1));
 const FIRST=['Anita','Ravi','Suma','Vijay','Lakshmi','Sunil','Deepa','Mohan','Priya','Arjun','Reena','Kavya','Imran','Meera','Rahul','Sneha','Karthik','Divya','Naveen','Pooja','Sanjay','Nisha','Ganesh','Rekha','Vikram','Anjali','Prakash','Shweta','Ramesh','Geeta','Suresh','Latha','Ashok','Bhavana','Manoj','Kiran','Vinod','Asha','Rajesh','Neha','Mahesh','Swati','Girish','Aparna','Harish','Jyoti','Nitin','Radha','Srikanth','Uma','Balaji','Chitra','Dinesh','Farida','Gopal','Hema','Irfan','Jayanti','Kishore','Leela','Madhu','Nalini','Omkar','Pallavi','Qasim','Rohit','Sudha','Tarun','Usha','Varun','Yamini','Zubair','Abdul','Bindu','Chetan','Damini','Eswar','Fatima','Gauri','Hari','Indira','Jagan','Kamal','Lalitha','Murali','Nandini','Prasad','Rani','Shankar','Tanuja','Uday','Vani','Yogitha','Zoya','Ajay','Bhaskar','Charan','Dhanya','Ekta'];
 const LAST=['Rao','Kumar','Nair','Menon','Iyer','Shetty','Reddy','Bhat','Patil','Das','Gowda','Pillai','Nayak','Hegde','Kulkarni','Joshi','Desai','Naik','Prabhu','Kamath','Pai','Shenoy','Bhandari','Acharya','Kini','Baliga','Mallya','Kotian','Shanbhag','Kudva','Salian','Poojary','Suvarna','Amin','Rai','Verma','Sharma','Gupta','Singh','Mishra','Yadav','Pandey','Bose','Ghosh','Dutta','Banerjee','Sen','Roy'];
 const DESIG=['Manager','Assistant Manager','Officer','Senior Manager','Chief Manager','AGM','DGM','Branch Manager','Field Officer','Development Officer','Deputy Manager','Executive'];
 const DUTIES=['Branch operations','Credit appraisal','Recovery & monitoring','Financial inclusion','Agri lending','Audit & compliance','Treasury operations','Human resources'];
 const FILL=['Nil','NA','N/A','No','None','-','.','Not Applicable','nil','n.a.','—','','Nothing'];
 const ADD_T=['More case studies from RRBs','Digital lending platforms may be covered','Practical session on the ENSURE portal','Climate risk scoring tools','GST and taxation updates','Cyber fraud investigation techniques','AI tools for credit appraisal','More field exposure to FPOs','Session on SARFAESI proceedings','Coverage of NPA management','Detailed module on KCC','Insurance linked lending','Hands-on ledger scrutiny','More on co-lending arrangements','Exposure to UPI and digital rails'];
 const EXC_T=['The introductory session may be shortened','Overlapping regulatory session may be merged','Basic accounting recap can be dropped','Repetition in day 2 sessions','General banking overview may be reduced'];
 const LEARN=['Structured credit appraisal approach','Risk-based supervision framework','Practical use of digital tools','Value chain financing model','IRAC norms and provisioning','ALM and stress testing basics','Climate resilient financing options','Entrepreneurship development process','Understanding of the ENSURE portal','Credit monitoring techniques','Preparation of project reports','Appraisal of MSME proposals','Linkage of SHGs with banks','Documentation and legal aspects','Use of credit scoring models','Recovery strategies under SARFAESI','Financial statement analysis','Portfolio diversification methods'];
 const ACTS=['Will apply the appraisal checklist in my branch','Share the learning with the branch team','Implement the monitoring template','Conduct an awareness session at the Head Office','Prepare an action plan for the district','Use the toolkit for MSME clients','Improve documentation practices','Train the field staff on the new formats','Introduce monthly credit review meetings','Revisit the branch lending policy','Start using the digital appraisal sheet','Sensitise PACS on the scheme'];
 const IMPR=['Better AV arrangement in the hall','More interactive sessions needed','Handouts may be shared in advance','Longer Q&A time','Reading material may be sent by e-mail'];
 const BIMP=['Improve variety in the menu','Serving timings may be maintained','More hygienic arrangements','South Indian breakfast may be added','Evening tea timing may be revised'];
 const LIMP=['Wi-Fi speed may be improved','Room cleaning frequency may be increased','Hot water availability in the morning','Additional plug points in the rooms','Reading lamp may be provided'];
 const OSUG=['Well organised programme','Such programmes may be continued annually','Duration may be extended by a day','A field visit may be included','Certificates may be issued on the last day','More programmes for RRB officers','Faculty were very supportive','Pre-reading material may be circulated','Online follow-up session may be arranged'];
 const NOTU=['Not applicable to my present role','The content was too advanced','Already covered in an earlier programme'];
 const cal=[
  ['Programme on Applied Entrepreneurial Skills – Planning, Marketing, Branding, Packaging for micro entrepreneurs','Sheela M Bhandarkar','Shakti P Mohapatra',35,'Sponsored','Rural MSME Department'],
  ['Customised Programme','P R Thomas','E Prathap',28,'Customised',''],
  ['Strengthening Financial Discipline in RRBs and RCBs: Accounting Standards, IRAC Norms & Taxation','K Satheesan','M S Suvarna',27,'Sponsored','Department of Supervision'],
  ['Customised Programme','E Prathap','K Satheesan',32,'Customised',''],
  ['Fostering Collaboration and Growth in Allied Sector – Unleashing Power of Cooperation Amongst Cooperatives, extension and support programmes','Yogesh S L','P R Thomas',30,'Sponsored','Co-operative Sector Development Department'],
  ['Customised Programme','Shakti P Mohapatra','Yogesh S L',25,'Customised',''],
  ['Agriculture Project Appraisal, Management and Credit Score Based Retail Lending','Yogesh S L','M S Suvarna',33,'Sponsored','Department of Refinance'],
  ['Programme on Agri Value Chain and Climate Resilient agriculture financing and marketing','M S Suvarna','Sheela M Bhandarkar',31,'Sponsored','Department of Climate Action & Sustainability'],
  ['Customised Programme','K Satheesan','E Prathap',34,'Customised',''],
  ['Practical Technologies for Micro Food Enterprises (CFTRI/NIFTEM)','Sheela M Bhandarkar','Shakti P Mohapatra',35,'Sponsored','Rural MSME Department']];
 const modes=['In House','Online','On Location'];
 const otP=[['RRB - Regional Rural Bank',34],['RCB - DCCB or State Co-operative Bank',22],['Commercial Bank',18],['Urban Co-operative Banks',8],['Small Finance Bank',5],['Private Sector Bank',4],['NABARD',3],['FPO - Farmers Producer Company/ Organisation',3],['Government Departments',2],['NGO',1]];
 const catP=[['General',46],['OBC',27],['SC',14],['ST',8],['Other',3],['Not willing to Disclose',2]];
 const genP=[['Male',68],['Female',31],['Non-binary',1]];
 const rateP=[['Excellent',52],['Good',36],['Satisfactory',10],['Not Adequate',2]];
 const utilP=[['Very Useful',72],['Occasionally Useful',25],['Not Useful',3]];
 const infP=[['Excellent',40],['Very Good',34],['Good',22],['Poor',4]];
 const durP=[['Yes',84],['No',16]];
 const cmt=(pool)=>(RND()<0.60)?pick(pool):pick(FILL);
 const proposed=JSON.parse(JSON.stringify(PROPOSED_DEFAULT));
 function tgFor(nm,dept){const k=(dept||'Customised');const h=proposed.find(x=>x.name===nm&&x.dept===k)||proposed.find(x=>x.name===nm);return h&&h.tg?h.tg.slice():[];}
 let cursor=new Date('2026-05-05T00:00:00');
 const programmes=[],forms={},responses={};const used=new Set();const allP=[];
 function uniq(){let n,g=0;do{n=pick(FIRST)+' '+pick(LAST);g++;}while(used.has(n)&&g<40);used.add(n);return n;}
 cal.forEach((c,i)=>{
  const id='TP26'+String(i+1).padStart(2,'0');const days=ir(3,5);
  const st=new Date(cursor);const sISO=st.toISOString().slice(0,10);
  const ed=new Date(st);ed.setDate(ed.getDate()+days-1);const eISO=ed.toISOString().slice(0,10);
  cursor=new Date(ed);cursor.setDate(cursor.getDate()+ir(9,20));
  const p={id,name:c[0],pd:c[1],copd:c[2],mode:modes[i%3],ptype:c[4],sdept:c[5]||'',tg:tgFor(c[0],c[4]==='Customised'?'Customised':c[5]),start:sISO,end:eISO,days};
  programmes.push(p);
  forms[id]={registration:stdRegForm(),entry:stdQuiz(),exit:stdQuiz(),feedback:stdFeedbackForm()};
  responses[id]={registration:[],feedback:[],tests:[]};
  for(let k=0;k<c[3];k++){
   const nm=uniq();const ot=wpick(otP);let org;
   if(ot==='RRB - Regional Rural Bank')org=pick(window.ORG_NAMES.filter(o=>/Gramin|Grameen|Grameena|Gramya|Grama/.test(o)))||'Karnataka Gramin Bank';
   else if(ot==='RCB - DCCB or State Co-operative Bank')org=pick(window.ORG_NAMES.filter(o=>/Co-operative/.test(o)))||'The Karnataka State Co-operative Apex Bank';
   else if(ot==='Small Finance Bank')org=pick(window.ORG_NAMES.filter(o=>/Small Finance/.test(o)))||'AU Small Finance Bank';
   else if(ot==='NABARD')org='NABARD';
   else if(ot==='Commercial Bank'||ot==='Private Sector Bank')org=pick(['State Bank of India','Canara Bank','Union Bank of India','HDFC Bank','ICICI Bank','Axis Bank','Federal Bank','Karnataka Bank']);
   else org=pick(window.ORG_NAMES);
   const mob=pick(['9','8','7'])+String(ir(100000000,999999999));
   responses[id].registration.push({answers:{'Name':nm,'Designation':pick(DESIG),'Organisation Type':ot,'Gender':wpick(genP),'Category':wpick(catP),'Name of the Organisation / Institute / Bank':org,'State / Union Territory':pick(STATES_UT),'Age (in Years)':String(ir(27,58)),'Mobile Number':mob,'e-mail ID':nm.toLowerCase().replace(/[^a-z]/g,'.').replace(/\.+/g,'.')+'@example.in','Nature of present duties and assignments':pick(DUTIES),'Name of contact person (emergency)':pick(FIRST)+' '+pick(LAST),'Mobile number of contact person (emergency)':pick(['9','8'])+String(ir(100000000,999999999))},at:sISO});
   allP.push({name:nm,mobile:mob,prog:id,progName:c[0],org:org,end:eISO});
   const e1=ir(2,16);
   if(RND()<0.90)responses[id].tests.push({name:nm,type:'Entry',score:e1,total:20});
   if(RND()<0.85)responses[id].tests.push({name:nm,type:'Exit',score:Math.min(20,e1+ir(2,8)),total:20});
   if(RND()<0.82){
    const fa={'Name':nm};
    FB_RATE_Q.forEach(q=>fa[q]=wpick(rateP));
    fa['If In Adequate, please give suggestion for improvement']=FB_RATE_Q.some(q=>fa[q]==='Not Adequate')?pick(IMPR):pick(FILL);
    fa['Keeping in view the objectives of the programme, additional topic(s) to be included']=cmt(ADD_T);
    fa['Keeping in view the objectives of the programme, Existing topic(s) to be excluded']=cmt(EXC_T);
    FB_UTIL_Q.forEach(q=>fa[q]=wpick(utilP));
    fa['If not useful, why?']=FB_UTIL_Q.some(q=>fa[q]==='Not Useful')?pick(NOTU):pick(FILL);
    const dur=wpick(durP);
    fa['Comments on the duration of the programme: Whether Adequate?']=dur;
    fa['If No, Number of days suggested']=(dur==='No')?String(ir(4,6)):'';
    fa['Name Important Learning Points for the programme']=cmt(LEARN);
    fa['Please specify the steps/ action you propose to take to utilize the learning at your workplace']=cmt(ACTS);
    fa['Comments on Infrastructure facilities – Boarding']=wpick(infP);
    fa['Required Improvements, if any (Boarding)']=cmt(BIMP);
    fa['Comments on Infrastructure facilities - Lodging']=wpick(infP);
    fa['Required Improvements, if any (Lodging)']=cmt(LIMP);
    fa['Other Suggestions relating to the programme, if any']=cmt(OSUG);
    FB_SESSIONS.forEach((s,si)=>{fa[s]=((Math.floor(si/4)+1)<=p.days)?wpick(rateP):'';});
    responses[id].feedback.push({answers:fa,at:eISO});
   }
  }
 });
 const blacklist=[];
 const bSample=[[0,'Irregular attendance / absenteeism','Remained absent for two full sessions on Day 2 without prior intimation to the Programme Director.'],[1,'Poor performance in the programme','Scored below the qualifying level in the exit assessment and did not participate in group exercises.'],[2,'Misconduct during the programme','Behaved inappropriately with fellow participants during the residential stay; a written complaint was received.'],[3,'Violation of institute rules','Left the campus during session hours on two occasions despite being advised otherwise.']];
 bSample.forEach((b,i)=>{const idx=Math.floor((allP.length/5)*(i+1))%allP.length;const pr=allP[idx];if(!pr)return;
  blacklist.push({name:pr.name,mobile:pr.mobile,org:pr.org,reason:b[1],remarks:b[2],prog:pr.prog,progName:pr.progName,by:'admin',at:pr.end});});
 const claims={evals:{},proposed,pbudgets:{},percmt:{},tgroups:TARGET_GROUPS_DEFAULT.slice()};
 proposed.forEach((x,i)=>{const per=(x.days?x.days:2)*45000;const ap=Math.round((per*(x.count||1))/1000)*1000;const ut=Math.round(ap*(0.62+((i*13)%30)/100)/1000)*1000;claims.pbudgets[x.dept+'||'+x.name]={approved:ap,utilized:Math.min(ut,ap)};});
 return {programmes,forms,responses,archive:[],claims,blacklist,faculty:JSON.parse(JSON.stringify(FACULTY_DEFAULT)),users:[{uid:'admin',name:'Karthigeyan M G',role:'Admin',status:'Active'},{uid:'pd',name:'Naveenkumar H S',role:'PD/Co-PD',status:'Active'},{uid:'user',name:'General Staff',role:'General',status:'Active'}]};
}
let DB=JSON.parse(localStorage.getItem(DB_KEY))||seed();
if(!DB.archive)DB.archive=[];
if(!DB.blacklist)DB.blacklist=[];
if(!DB.claims)DB.claims={evals:{},proposed:JSON.parse(JSON.stringify(PROPOSED_DEFAULT)),pbudgets:{},percmt:{},tgroups:TARGET_GROUPS_DEFAULT.slice()};
if(!DB.claims.percmt)DB.claims.percmt={};
if(!DB.claims.peredit)DB.claims.peredit={};
if(!DB.claims.tgroups)DB.claims.tgroups=TARGET_GROUPS_DEFAULT.slice();
if(!DB.faculty)DB.faculty=JSON.parse(JSON.stringify(FACULTY_DEFAULT));
DB.programmes.forEach(p=>{if(!p.ptype)p.ptype='Sponsored';if(p.sdept==null)p.sdept='';if(!Array.isArray(p.tg))p.tg=[];});
(DB.claims.proposed||[]).forEach(x=>{if(!Array.isArray(x.tg))x.tg=[];});
function save(){localStorage.setItem(DB_KEY,JSON.stringify(DB))}
function normName(s){return (''+(s==null?'':s)).toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();}
function normMob(s){const d=(''+(s==null?'':s)).replace(/\D/g,'');return d.length>10?d.slice(-10):d;}
function blKey(n,m){return normName(n)+'|'+normMob(m);}
function blList(){return DB.blacklist||(DB.blacklist=[]);}
function blFind(name,mobile){const n=normName(name),m=normMob(mobile);const L=blList();let h=null;
 if(n&&m){h=L.find(b=>normName(b.name)===n&&normMob(b.mobile)===m);if(h)return h;}
 if(m){h=L.find(b=>normMob(b.mobile)===m);if(h)return h;}
 if(n){h=L.find(b=>normName(b.name)===n);if(h)return h;}
 return null;}
function blMatchBasis(name,mobile){const n=normName(name),m=normMob(mobile);const L=blList();
 if(n&&m&&L.some(b=>normName(b.name)===n&&normMob(b.mobile)===m))return 'name + mobile';
 if(m&&L.some(b=>normMob(b.mobile)===m))return 'mobile';
 if(n&&L.some(b=>normName(b.name)===n))return 'name';
 return '';}
function isBlacklisted(name,mobile){return !!blFind(name,mobile);}
function blAdd(rec){const ex=blFind(rec.name,rec.mobile);if(ex)Object.assign(ex,rec);else blList().push(rec);save();}
function blRemove(name,mobile){const ex=blFind(name,mobile);if(!ex)return false;const i=blList().indexOf(ex);if(i>=0){blList().splice(i,1);save();return true;}return false;}
function blCount(){return blList().length;}
function proposedList(){return (DB.claims&&DB.claims.proposed)?DB.claims.proposed:[];}
function tgMaster(){const s=(DB.claims.tgroups||TARGET_GROUPS_DEFAULT).slice();proposedList().forEach(x=>(x.tg||[]).forEach(t=>{if(s.indexOf(t)<0)s.push(t);}));DB.programmes.forEach(p=>(p.tg||[]).forEach(t=>{if(s.indexOf(t)<0)s.push(t);}));return s;}
function tgAddMaster(name){name=(name||'').trim();if(!name)return false;const cur=DB.claims.tgroups||(DB.claims.tgroups=TARGET_GROUPS_DEFAULT.slice());if(cur.some(x=>x.toLowerCase()===name.toLowerCase()))return false;cur.push(name);save();return true;}
function tgUsed(){const s=[];DB.programmes.forEach(p=>(p.tg||[]).forEach(t=>{if(s.indexOf(t)<0)s.push(t);}));return s.sort((a,b)=>a.localeCompare(b));}
function tgPicker(containerId,selected){TGSEL=(selected||[]).slice();return '<div class="tgbox" id="'+containerId+'">'+tgPickerInner()+'</div><div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap"><input id="tg_new" placeholder="Add a new target group…" style="flex:1;min-width:190px;padding:8px 11px;font-size:13px"><button class="btn sm sec" type="button" onclick="tgAddNew(\''+containerId+'\')">+ Add group</button></div><div id="tg_count" style="font-size:11.5px;color:var(--muted);margin-top:6px">'+TGSEL.length+' group(s) selected</div>';}
function tgPickerInner(){return tgMaster().map(t=>'<span class="tgopt'+(TGSEL.indexOf(t)>=0?' on':'')+'" onclick="tgToggle(\''+t.replace(/'/g,"\\'")+'\')"><span class="tk">'+(TGSEL.indexOf(t)>=0?'☑':'☐')+'</span>'+t+'</span>').join('');}
function tgToggle(t){const i=TGSEL.indexOf(t);if(i>=0)TGSEL.splice(i,1);else TGSEL.push(t);tgRefresh();}
function tgRefresh(){const box=document.querySelector('.tgbox');if(box)box.innerHTML=tgPickerInner();const c=document.getElementById('tg_count');if(c)c.textContent=TGSEL.length+' group(s) selected';}
function tgAddNew(cid){const el=document.getElementById('tg_new');if(!el)return;const v=el.value.trim();if(!v){toast('Enter a group name');return;}const existing=tgMaster().find(x=>x.toLowerCase()===v.toLowerCase());if(existing){if(TGSEL.indexOf(existing)<0)TGSEL.push(existing);el.value='';tgRefresh();toast('"'+existing+'" already exists — selected');return;}tgAddMaster(v);if(TGSEL.indexOf(v)<0)TGSEL.push(v);el.value='';tgRefresh();toast('Target group "'+v+'" added ✓');}
function pbKey(x){return x.dept+'||'+x.name;}
function pbGet(x){return (DB.claims.pbudgets||{})[pbKey(x)]||{};}
function deptProposedCount(d){return proposedList().filter(x=>x.dept===d).reduce((s,x)=>s+(+x.count||0),0);}
function deptApproved(d){return proposedList().filter(x=>x.dept===d).reduce((s,x)=>s+(+(pbGet(x).approved)||0),0);}
function deptUtilized(d){return proposedList().filter(x=>x.dept===d).reduce((s,x)=>s+(+(pbGet(x).utilized)||0),0);}
function proposedDepts(){const s=[];proposedList().forEach(x=>{if(s.indexOf(x.dept)<0)s.push(x.dept);});return s;}
function proposedNamesFor(pt,d){const k=(pt==='Customised')?'Customised':d;if(!k)return [];const n=[];proposedList().forEach(x=>{if(x.dept===k&&n.indexOf(x.name)<0)n.push(x.name);});return n.sort((a,b)=>a.localeCompare(b));}
function proposedRec(pt,d,nm){const k=(pt==='Customised')?'Customised':d;return proposedList().find(x=>x.dept===k&&x.name===nm)||null;}
function proposedDaysFor(pt,d,nm){const h=proposedRec(pt,d,nm);return h?(+h.days||0):0;}
function proposedTGFor(pt,d,nm){const h=proposedRec(pt,d,nm);return (h&&Array.isArray(h.tg))?h.tg.slice():[];}
function facultyList(){return DB.faculty||[];}
function facultyNames(){return facultyList().filter(f=>f.status!=='Inactive').map(f=>f.name).sort((a,b)=>a.localeCompare(b));}
function facDesig(n){const f=facultyList().find(x=>x.name===n);return f?(f.desig||''):'';}
function facWithDesig(n){const d=facDesig(n);return d?(n+', '+d):n;}
function registeredNames(id){const s=new Set();((DB.responses[id]&&DB.responses[id].registration)||[]).forEach(r=>{const n=aName(r.answers);if(n)s.add(n);});return [...s].sort((a,b)=>a.localeCompare(b));}
function registeredRecords(id){
 const seen=new Set();const out=[];
 ((DB.responses[id]&&DB.responses[id].registration)||[]).forEach(r=>{
  const a=r.answers||{};const n=aName(a);if(!n)return;
  const k=normName(n);if(seen.has(k))return;seen.add(k);
  out.push({name:n,key:k,org:aOrg(a),desig:aDesig(a),mobile:aMobile(a),email:aEmail(a)});});
 return out.sort((a,b)=>a.name.localeCompare(b.name));}
function submittedKeys(id,kind){
 const s=new Set();const r=DB.responses[id];if(!r)return s;
 if(kind==='Feedback'){(r.feedback||[]).forEach(x=>{const n=normName(aName(x.answers));if(n)s.add(n);});}
 else{(r.tests||[]).forEach(t=>{if(t&&t.type===kind){const n=normName(t.name);if(n)s.add(n);}});}
 return s;}
function submissionStatus(id,kind){
 const reg=registeredRecords(id);
 const done=submittedKeys(id,kind);
 const submitted=reg.filter(x=>done.has(x.key));
 const pending=reg.filter(x=>!done.has(x.key));
 const regKeys=new Set(reg.map(x=>x.key));
 const extra=[...done].filter(k=>!regKeys.has(k));
 return {kind,total:reg.length,submitted,pending,extra,
  pct:reg.length?Math.round(submitted.length/reg.length*100):0};}
function pendingCount(id,kind){return submissionStatus(id,kind).pending.length;}
function usedDepts(){const s=new Set(SPONSOR_DEPTS);DB.programmes.forEach(p=>{const d=pDept(p);if(d)s.add(d);});return [...s].filter(d=>d!=='Other').sort((a,b)=>a.localeCompare(b));}
const $=s=>document.querySelector(s);
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3600)}
function prog(id){return DB.programmes.find(x=>x.id===id)}
function progName(id){const p=prog(id);return p?p.name:id}
function num(v){const n=parseFloat(v);return isNaN(n)?0:n}
function count(a,fn){const m={};a.forEach(x=>{const k=fn(x)||'—';m[k]=(m[k]||0)+1});return m}
function countIn(arr,key,opts){const m={};(opts||[]).forEach(o=>m[o]=0);arr.forEach(x=>{const v=((x[key]||'')+'').trim();if(v)m[v]=(m[v]||0)+1;});return m;}
function orderBy(map,order){const o={};(order||[]).forEach(k=>{if(map[k]!=null)o[k]=map[k];});Object.keys(map).forEach(k=>{if(o[k]==null)o[k]=map[k];});return o;}
function sortDesc(m){const o={};Object.entries(m).sort((a,b)=>b[1]-a[1]).forEach(([k,v])=>o[k]=v);return o;}
function openModal(h,w){$('#modal').className='modal'+(w?' wide':'');$('#modal').innerHTML=h;$('#modalBg').style.display='flex'}
function closeModal(){$('#modalBg').style.display='none'}
$('#modalBg').addEventListener('click',e=>{if(e.target.id==='modalBg')closeModal()});
function fyOf(d){if(!d)return '';const y=parseInt(d.slice(0,4),10),m=parseInt(d.slice(5,7),10);const s=(m>=4)?y:y-1;return s+'-'+String((s+1)%100).padStart(2,'0');}
function endOf(p){if(!p)return '';if(p.end)return p.end;if(p.start&&p.days){const d=new Date(p.start+'T00:00:00');d.setDate(d.getDate()+(+p.days-1));return d.toISOString().slice(0,10);}return p.start||'';}
function fmtDate(iso){if(!iso)return '—';const m=(''+iso).match(/^(\d{4})-(\d{2})-(\d{2})/);if(!m)return iso;return m[3]+'-'+m[2]+'-'+m[1];}
function fmtLong(iso){if(!iso)return '—';const M=['January','February','March','April','May','June','July','August','September','October','November','December'];const m=(''+iso).match(/^(\d{4})-(\d{2})-(\d{2})/);if(!m)return iso;return parseInt(m[3],10)+' '+M[parseInt(m[2],10)-1]+' '+m[1];}
function daysBetween(s,e){if(!s||!e)return '';const a=new Date(s+'T00:00:00'),b=new Date(e+'T00:00:00');if(isNaN(a)||isNaN(b)||b<a)return '';return Math.round((b-a)/86400000)+1;}
function fyList(){const s=new Set(DB.programmes.map(p=>fyOf(p.start)).filter(Boolean));return [...s].sort().reverse();}
function currentFY(){const l=fyList();if(!FY||!l.includes(FY))FY=l[0]||'';return FY;}
function progsInFY(fy){return DB.programmes.filter(p=>fyOf(p.start)===fy)}
function regInFY(fy){let a=[];progsInFY(fy).forEach(p=>DB.responses[p.id].registration.forEach(r=>a.push({prog:p.id,...r.answers})));return a}
function fbInFY(fy){let a=[];progsInFY(fy).forEach(p=>DB.responses[p.id].feedback.forEach(r=>a.push({prog:p.id,...r.answers})));return a}
function partCount(p){return DB.responses[p.id].registration.length;}
function progTrainingDays(p){return partCount(p)*(+p.days||0);}
function trainingDays(ps){return ps.reduce((a,p)=>a+progTrainingDays(p),0);}
function testsByName(id){const m={};(DB.responses[id].tests||[]).forEach((x,gi)=>{const k=x.name||'—';const o=(m[k]=m[k]||{name:k});if(x.type==='Exit'){o.exit=x;o.exitIdx=gi;}else{o.entry=x;o.entryIdx=gi;}});return Object.values(m).sort((a,b)=>a.name.localeCompare(b.name));}
function ssPanel(id,kind){
 const s=submissionStatus(id,kind);
 const cls=(s.pct>=100)?'':(s.pct>=60?'warn':'bad');
 const showing=(SSVIEW==='submitted')?s.submitted:s.pending;
 const heading=(SSVIEW==='submitted')?'✅ Submitted':'⏳ Yet to submit';
 const icon=(kind==='Feedback')?'⭐':'🧪';
 let body;
 if(!s.total)body='<div class="empty" style="padding:18px">No participant is registered for this programme yet.</div>';
 else if(!showing.length)body='<div class="empty" style="padding:18px">'+((SSVIEW==='submitted')?'No one has submitted yet.':'🎉 Everyone has submitted — nothing pending.')+'</div>';
 else body='<div class="pendbox'+((SSVIEW==='submitted')?' done':'')+'">'+showing.map((x,i)=>
   '<div class="it"><span class="sn">'+(i+1)+'.</span><span class="who">'+esc(x.name)+
   '<div class="org">'+esc(x.desig||'—')+' · '+esc(x.org||'—')+(x.mobile?(' · 📱 '+esc(x.mobile)):'')+'</div></span>'+
   ((SSVIEW==='submitted')?'<span class="tag g">✓</span>':'<span class="tag a">pending</span>')+'</div>').join('')+'</div>';
 return '<div>'+
  '<div class="subhead"><h4>'+icon+' '+esc(kind==='Feedback'?'Feedback':(kind+' Test'))+'</h4>'+
   '<span class="tag '+(s.pending.length?'a':'g')+'">'+(s.pending.length?(s.pending.length+' pending'):'All submitted')+'</span></div>'+
  '<div class="subkpi"><div><b>'+s.total+'</b><span>Registered</span></div>'+
   '<div><b style="color:var(--green-d)">'+s.submitted.length+'</b><span>Submitted</span></div>'+
   '<div><b style="color:'+(s.pending.length?'var(--amber)':'var(--green-d)')+'">'+s.pending.length+'</b><span>Pending</span></div></div>'+
  '<div class="prog '+cls+'"><i style="width:'+s.pct+'%"></i></div>'+
  '<div style="font-size:11.5px;color:var(--muted);margin:-4px 0 8px">'+s.pct+'% of registered participants have submitted'+
   (s.extra.length?(' · <span style="color:var(--amber)">'+s.extra.length+' submission(s) from names not on the register</span>'):'')+'</div>'+
  '<div style="font-size:12px;font-weight:700;color:var(--muted);margin-bottom:5px">'+heading+' ('+showing.length+')</div>'+
  body+'</div>';}
function ssView(v,id,mode){SSVIEW=v;submissionStatusModal(id,mode);}
function submissionStatusModal(id,mode){
 const p=prog(id);const kinds=(mode==='feedback')?['Feedback']:['Entry','Exit'];
 const tot=kinds.reduce((s,k)=>s+pendingCount(id,k),0);
 const reg=registeredRecords(id).length;
 const title=(mode==='feedback')?'⭐ Feedback — Submission Status':'🧪 Entry / Exit Test — Submission Status';
 const note=tot
  ? '<div class="notice amber">⏳ <b>'+tot+'</b> submission(s) are still awaited'+(mode==='feedback'?'':' across the entry and exit tests')+'. The list updates on its own — once a participant\u2019s response is recorded their name disappears from here.</div>'
  : '<div class="notice">✅ All <b>'+reg+'</b> registered participants have submitted. Nothing is pending.</div>';
 openModal('<button class="x" onclick="closeModal()">✕</button><h3'+(tot?' class="amber"':'')+'>'+title+'</h3>'+
  '<p style="color:var(--muted);font-size:13px;margin-top:6px"><b>'+esc(p.name)+'</b> <span class="pill">'+p.id+'</span> · '+reg+' participant(s) registered</p>'+
  '<div class="mt">'+note+'</div>'+
  '<div class="subnav" style="margin-bottom:12px">'+
   '<button class="'+(SSVIEW==='pending'?'active':'')+'" onclick="ssView(\'pending\',\''+id+'\',\''+mode+'\')">⏳ Yet to submit</button>'+
   '<button class="'+(SSVIEW==='submitted'?'active':'')+'" onclick="ssView(\'submitted\',\''+id+'\',\''+mode+'\')">✅ Already submitted</button>'+
   '<button class="btn sm sec" style="margin-left:auto" onclick="exSubmissionStatus(\''+id+'\',\''+mode+'\')">⬇️ Export list (CSV)</button></div>'+
  ((kinds.length>1)?('<div class="subgrid">'+kinds.map(k=>ssPanel(id,k)).join('')+'</div>')
                   :('<div style="max-width:560px">'+ssPanel(id,kinds[0])+'</div>')),true);}
function exSubmissionStatus(id,mode){
 const p=prog(id);const kinds=(mode==='feedback')?['Feedback']:['Entry','Exit'];
 let rows=[['Programme Code','Programme','Requirement','Status','Participant','Designation','Organisation','Mobile','e-mail']];
 kinds.forEach(k=>{const s=submissionStatus(id,k);
  s.pending.forEach(x=>rows.push([p.id,p.name,k,'Yet to submit',x.name,x.desig,x.org,x.mobile,x.email]));
  s.submitted.forEach(x=>rows.push([p.id,p.name,k,'Submitted',x.name,x.desig,x.org,x.mobile,x.email]));});
 csv(rows,'Submission_Status_'+p.id+'_'+((mode==='feedback')?'Feedback':'EntryExit')+'.csv');}
function ssStrip(id,kinds){
 const parts=kinds.map(k=>{const s=submissionStatus(id,k);
  return '<span style="display:inline-flex;align-items:center;gap:5px;white-space:nowrap">'+
   '<b style="color:'+(s.pending.length?'var(--amber)':'var(--green-d)')+'">'+s.submitted.length+'/'+s.total+'</b>'+
   '<span style="color:var(--muted)">'+(k==='Feedback'?'feedback':(k.toLowerCase()+' test'))+'</span>'+
   (s.pending.length?('<span class="tag a">'+s.pending.length+' pending</span>'):'<span class="tag g">complete</span>')+'</span>';});
 return '<div style="display:flex;gap:16px;flex-wrap:wrap;font-size:12.5px;align-items:center">'+parts.join('')+'</div>';}
/* ============ DUPLICATE CLEAN-UP UI ============ */
function dupBanner(id,kind,pageKey){
 const d=dupInfo(id,kind);
 if(!d.dup)return '';
 const what=(kind==='feedback')?'feedback response':'registration';
 return '<div class="notice amber" style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">'+
  '<span>⚠️ <b>'+d.dup+'</b> duplicate '+what+'(s) detected — <b>'+d.total+'</b> rows stored but only <b>'+d.unique+'</b> are distinct. '+
  'Duplicates inflate every count and every comment multiplier while leaving the percentages unchanged.</span>'+
  '<button class="btn sm warn" onclick="dupClean(\''+id+'\',\''+kind+'\',\''+pageKey+'\')">🧹 Review &amp; remove duplicates</button></div>';}
function dupClean(id,kind,pageKey){
 const store=(DB.responses[id]&&DB.responses[id][kind])||[];
 const labels=formLabels(id,kind);const seen=new Map();const dups=[];
 store.forEach((r,i)=>{const k=respFingerprint(r.answers,labels);
  if(seen.has(k))dups.push({i:i,first:seen.get(k),name:aName(r.answers)||'(no name)'});
  else seen.set(k,i);});
 const d=dupInfo(id,kind);
 openModal('<button class="x" onclick="closeModal()">✕</button><h3 class="amber">🧹 Duplicate '+((kind==='feedback')?'Feedback':'Registration')+' Responses</h3>'+
  '<p style="color:var(--muted);font-size:13px;margin-top:6px"><b>'+esc(prog(id).name)+'</b> <span class="pill">'+id+'</span></p>'+
  '<div class="notice amber mt">A duplicate is a row whose answers are <b>identical in every column</b> to a row already stored — the signature of the same sheet having been uploaded more than once. Two different participants who happened to answer identically are <b>not</b> duplicates, because their names differ.</div>'+
  '<div class="subkpi mt"><div><b>'+d.total+'</b><span>Rows stored</span></div>'+
   '<div><b style="color:var(--green-d)">'+d.unique+'</b><span>Distinct</span></div>'+
   '<div><b style="color:var(--amber)">'+d.dup+'</b><span>Duplicates</span></div></div>'+
  '<div class="mt" style="max-height:38vh;overflow:auto"><table><thead><tr><th>Row</th><th>Participant</th><th>Duplicate of row</th></tr></thead><tbody>'+
   dups.map(x=>'<tr class="duprow"><td>'+(x.i+1)+'</td><td><b>'+esc(x.name)+'</b></td><td>'+(x.first+1)+'</td></tr>').join('')+
  '</tbody></table></div>'+
  '<div class="row mt" style="gap:8px"><button class="btn warn" style="flex:1" onclick="dupCleanConfirm(\''+id+'\',\''+kind+'\',\''+pageKey+'\')">🧹 Remove '+d.dup+' duplicate row(s), keep the first of each</button><button class="btn ghost" onclick="closeModal()">Cancel</button></div>',true);}
function dupCleanConfirm(id,kind,pageKey){
 const n=removeDuplicates(id,kind);closeModal();
 toast('Removed '+n+' duplicate row(s) ✓ · counts and comment multipliers are now correct');
 render(pageKey);}
function dupCleanAll(kind){
 const t=dupTotals(kind);
 if(!t.rows){toast('No duplicate responses found in any programme ✓');return;}
 openModal('<button class="x" onclick="closeModal()">✕</button><h3 class="amber">🧹 Remove Duplicates — All Programmes</h3>'+
  '<div class="notice amber mt">⚠️ <b>'+t.rows+'</b> duplicate '+((kind==='feedback')?'feedback':'registration')+' row(s) were found across <b>'+t.progs+'</b> programme(s). Removing them keeps the first occurrence of each and deletes the repeats.</div>'+
  '<div class="mt" style="max-height:40vh;overflow:auto"><table><thead><tr><th>Programme</th><th style="text-align:center">Stored</th><th style="text-align:center">Distinct</th><th style="text-align:center">Duplicates</th></tr></thead><tbody>'+
   DB.programmes.map(p=>{const d=dupInfo(p.id,kind);if(!d.dup)return '';
    return '<tr class="duprow"><td><span class="pill">'+p.id+'</span> '+esc(p.name)+'</td><td style="text-align:center">'+d.total+'</td><td style="text-align:center">'+d.unique+'</td><td style="text-align:center"><b>'+d.dup+'</b></td></tr>';}).join('')+
  '</tbody></table></div>'+
  '<div class="row mt" style="gap:8px"><button class="btn warn" style="flex:1" onclick="dupCleanAllConfirm(\''+kind+'\')">🧹 Remove all '+t.rows+' duplicate row(s)</button><button class="btn ghost" onclick="closeModal()">Cancel</button></div>',true);}
function dupCleanAllConfirm(kind){
 let n=0;DB.programmes.forEach(p=>{n+=removeDuplicates(p.id,kind);});
 closeModal();toast('Removed '+n+' duplicate row(s) across all programmes ✓');
 render(CURPAGE);}
const PER_LOGO=(window.BIRD_LOGO_DATA||'assets/bird-logo.png');
function perReady(id){const r=DB.responses[id];if(!r)return {reg:0,fb:0,tests:0,ok:false};const reg=r.registration.length,fb=r.feedback.length,ts=r.tests.length;return {reg,fb,tests:ts,ok:(reg>0&&fb>0&&ts>0)};}
function pctOf(map){const t=Object.values(map).reduce((a,b)=>a+b,0)||1;const o={};Object.keys(map).forEach(k=>o[k]=Math.round(map[k]/t*1000)/10);return o;}
const PER_COL={'Excellent':'#1f7a3f','Good':'#5aa469','Satisfactory':'#e0a33e','Not Adequate':'#c0392b','Very Good':'#5aa469','Poor':'#c0392b','Very Useful':'#1f7a3f','Occasionally Useful':'#e0a33e','Not Useful':'#c0392b','Yes':'#1f7a3f','No':'#c0392b'};
function perLegend(keys){return '<table class="chartbox" cellspacing="0" cellpadding="0" border="0" style="border:none;width:auto;margin:2px 0 5px"><tr>'+keys.map(k=>'<td style="border:none;padding:0 14px 0 0;font-size:8.5pt;white-space:nowrap"><span style="background:'+(PER_COL[k]||'#888')+';color:'+(PER_COL[k]||'#888')+';font-size:8.5pt">&#9608;&#9608;</span> '+k+'</td>').join('')+'</tr></table>';}
function perStack(rows,keys,labelW){labelW=labelW||32;const barW=100-labelW;
 let h=perLegend(keys)+'<table class="chartbox" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:none;border-collapse:collapse;margin-bottom:9px">';
 rows.forEach(r=>{let seg='',used=0;
  keys.forEach(k=>{const v=Math.round(+(r.pct[k]||0));if(v>0){used+=v;seg+='<td width="'+v+'%" bgcolor="'+(PER_COL[k]||'#888')+'" style="border:none;background:'+(PER_COL[k]||'#888')+';color:#ffffff;font-size:8pt;text-align:center;padding:4px 0;line-height:1.1">'+(v>=8?v:'')+'</td>';}});
  if(used<100)seg+='<td width="'+(100-used)+'%" bgcolor="#eeeeee" style="border:none;background:#eeeeee;padding:4px 0">&nbsp;</td>';
  if(!used)seg='<td width="100%" bgcolor="#eeeeee" style="border:none;background:#eeeeee;font-size:8pt;text-align:center;padding:4px 0;color:#777">no data</td>';
  h+='<tr><td width="'+labelW+'%" style="border:none;font-size:9pt;padding:3px 8px 3px 0;vertical-align:middle">'+esc(r.label)+'</td>'+
   '<td width="'+barW+'%" style="border:none;padding:3px 0"><table width="100%" cellspacing="0" cellpadding="0" border="0" style="border:none;border-collapse:collapse"><tr>'+seg+'</tr></table></td></tr>';});
 return h+'</table>';}
function perBars(rows,colour,suffix,labelW){labelW=labelW||32;suffix=suffix||'';const barW=100-labelW-8;
 const mx=Math.max(1,...rows.map(r=>+r.v||0));
 let h='<table class="chartbox" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:none;border-collapse:collapse;margin-bottom:9px">';
 rows.forEach(r=>{const v=+r.v||0;const w=Math.max(2,Math.round(v/mx*100));const c=r.colour||colour||'#1f7a3f';
  h+='<tr><td width="'+labelW+'%" style="border:none;font-size:9pt;padding:3px 8px 3px 0;vertical-align:middle">'+esc(r.label)+'</td>'+
   '<td width="'+barW+'%" style="border:none;padding:3px 0"><table width="100%" cellspacing="0" cellpadding="0" border="0" style="border:none;border-collapse:collapse"><tr>'+
   '<td width="'+w+'%" bgcolor="'+c+'" style="border:none;background:'+c+';padding:5px 0">&nbsp;</td>'+
   (w<100?'<td width="'+(100-w)+'%" style="border:none">&nbsp;</td>':'')+'</tr></table></td>'+
   '<td width="8%" style="border:none;padding:3px 0 3px 7px;font-size:9pt;white-space:nowrap"><b>'+nf(v)+suffix+'</b></td></tr>';});
 return h+'</table>';}
const Q_ADD='Keeping in view the objectives of the programme, additional topic(s) to be included';
const Q_EXC='Keeping in view the objectives of the programme, Existing topic(s) to be excluded';
const Q_LEARN='Name Important Learning Points for the programme';
const Q_ACTS='Please specify the steps/ action you propose to take to utilize the learning at your workplace';
const Q_BIMP='Required Improvements, if any (Boarding)';
const Q_LIMP='Required Improvements, if any (Lodging)';
const Q_OTHER='Other Suggestions relating to the programme, if any';
const Q_NOTUSE='If not useful, why?';
const Q_INADQ='If In Adequate, please give suggestion for improvement';
const Q_DAYS='If No, Number of days suggested';
function perData(id){
 const p=prog(id);const r=DB.responses[id];
 const F=(r.feedback||[]).map(x=>x.answers||{});
 const R=(r.registration||[]).map(x=>x.answers||{});
 const g=gainRatio(id);
 const ratings=FB_RATE_Q.map((q,i)=>({label:FB_RATE_SHORT[i],pct:pctOf(countIn(F,q,RATE4))}));
 const util=[{label:'Yourself',pct:pctOf(countIn(F,FB_UTIL_Q[0],UTIL3))},{label:'Your Organisation',pct:pctOf(countIn(F,FB_UTIL_Q[1],UTIL3))},{label:'Programme Contents / Coverage',pct:pctOf(countIn(F,FB_UTIL_Q[2],UTIL3))}];
 const dur=pctOf(countIn(F,'Comments on the duration of the programme: Whether Adequate?',YESNO));
 const durDays=commentList(F,Q_DAYS).map(x=>x.text);
 const board=pctOf(countIn(F,'Comments on Infrastructure facilities – Boarding',INFRA4));
 const lodge=pctOf(countIn(F,'Comments on Infrastructure facilities - Lodging',INFRA4));
 const sess=[];FB_SESSIONS.forEach((s,si)=>{const day=Math.floor(si/4)+1,no=(si%4)+1;if(F.some(x=>(x[s]||'').trim()))sess.push({day,no,roman:['I','II','III','IV'][no-1],pct:pctOf(countIn(F,s,RATE4))});});
 const addT=commentList(F,Q_ADD), excT=commentList(F,Q_EXC);
 const learn=commentList(F,Q_LEARN), acts=commentList(F,Q_ACTS);
 const bImp=commentList(F,Q_BIMP), lImp=commentList(F,Q_LIMP);
 const other=commentList(F,Q_OTHER), notUse=commentList(F,Q_NOTUSE), inadq=commentList(F,Q_INADQ);
 const orgTypes=Object.entries(sortDesc(count(R,x=>aOrgType(x)))).slice(0,6);
 const states=Object.entries(sortDesc(count(R,x=>aState(x)))).slice(0,8);
 const genders=orderBy(count(R,x=>aGender(x)),GENDERS);
 return {p,R,F,g,ratings,util,dur,durDays,board,lodge,sess,addT,excT,learn,acts,bImp,lImp,other,notUse,inadq,orgTypes,states,genders};
}
function perInsights(d){
 const ins=[];const p=d.p;const n=d.F.length;
 const ov=d.ratings[3].pct;const favOv=Math.round(((ov['Excellent']||0)+(ov['Good']||0))*10)/10;
 ins.push('Overall, <b>'+favOv+'%</b> of the '+n+' respondents rated the programme <i>Excellent</i> or <i>Good</i>, indicating '+(favOv>=85?'a very high':favOv>=70?'a healthy':'a moderate')+' level of participant satisfaction.');
 let best=null,worst=null;d.ratings.forEach(r=>{const f=(r.pct['Excellent']||0)+(r.pct['Good']||0);if(!best||f>best.f)best={l:r.label,f};if(!worst||f<worst.f)worst={l:r.label,f};});
 ins.push('<b>'+best.l+'</b> drew the strongest response ('+Math.round(best.f*10)/10+'% favourable), while <b>'+worst.l+'</b> recorded the lowest ('+Math.round(worst.f*10)/10+'%) and may merit attention in future editions.');
 const uy=d.util[0].pct,uo=d.util[1].pct;
 ins.push('On utility, <b>'+(uy['Very Useful']||0)+'%</b> found the programme very useful for themselves and <b>'+(uo['Very Useful']||0)+'%</b> for their organisation — confirming '+(((uy['Very Useful']||0)>=70)?'strong':'reasonable')+' practical relevance of the content.');
 if(d.g.ok){const pctg=(d.g.gr*100);ins.push('The <b>gain ratio of '+pctg.toFixed(2)+'%</b> (weighted average method) shows the mean knowledge level rose from '+d.g.E.avg.toFixed(2)+' at entry to '+d.g.X.avg.toFixed(2)+' at exit, evidencing '+(pctg>=50?'a substantial':pctg>=25?'a clear':'a modest')+' learning gain across '+d.g.X.total+' participants.');}
 const yes=d.dur['Yes']||0;
 ins.push('<b>'+yes+'%</b> of participants considered the '+p.days+'-day duration adequate'+((100-yes)>0?('; the remaining '+Math.round((100-yes)*10)/10+'% suggested a longer schedule'+(d.durDays.length?' (typically '+d.durDays.join(' / ')+' days)':'')):'')+'.');
 if(d.sess.length){let bs=null,ws=null;d.sess.forEach(s=>{const f=(s.pct['Excellent']||0)+(s.pct['Good']||0);if(!bs||f>bs.f)bs={s,f};if(!ws||f<ws.f)ws={s,f};});
  ins.push('Session-wise, <b>Day '+bs.s.day+' – Session '+bs.s.roman+'</b> was rated highest ('+Math.round(bs.f*10)/10+'% favourable) and <b>Day '+ws.s.day+' – Session '+ws.s.roman+'</b> lowest ('+Math.round(ws.f*10)/10+'%), offering a clear pointer for session-level refinement.');}
 const bF=(d.board['Excellent']||0)+(d.board['Very Good']||0),lF=(d.lodge['Excellent']||0)+(d.lodge['Very Good']||0);
 ins.push('Infrastructure was well received — boarding <b>'+Math.round(bF*10)/10+'%</b> and lodging <b>'+Math.round(lF*10)/10+'%</b> rated Excellent/Very Good.');
 const tg=pTG(p);if(tg.length)ins.push('The programme was designed for the target group(s) <b>'+tg.join(', ')+'</b>; actual participation came largely from '+d.orgTypes.slice(0,3).map(x=>x[0]+' ('+x[1]+')').join(', ')+', confirming good alignment with the intended audience.');
 const totC=d.addT.length+d.excT.length+d.learn.length+d.acts.length+d.bImp.length+d.lImp.length+d.other.length;
 ins.push('Participants recorded <b>'+totC+'</b> written observation(s) across the open questions'+(d.addT.length?(', the most frequently suggested addition being <b>'+d.addT[0].text+'</b>'+(d.addT[0].n>1?(' ('+d.addT[0].n+' participants)'):'')):'')+'.');
 return ins;
}
function perConclusion(d){const ov=d.ratings[3].pct;const fav=Math.round(((ov['Excellent']||0)+(ov['Good']||0))*10)/10;const gr=d.g.ok?(d.g.gr*100):null;
 let t='The programme was conducted as scheduled and met its stated objectives. With '+fav+'% of participants rating it Excellent or Good';
 if(gr!=null)t+=' and a measured gain ratio of '+gr.toFixed(2)+'%';
 t+=', the programme can be assessed as '+(fav>=85?'highly successful':fav>=70?'successful':'satisfactory')+'. ';
 t+='Participants indicated clear intent to apply the learning at their workplace, and the suggestions received on content and duration have been noted for incorporation in subsequent editions of the programme.';
 return t;}
function perPDComment(d){const k=d.p.id;const saved=(DB.claims.percmt||{})[k];if(saved)return saved;
 const ov=d.ratings[3].pct;const fav=Math.round(((ov['Excellent']||0)+(ov['Good']||0))*10)/10;const tg=pTG(d.p);
 let t='The programme was attended by '+d.R.length+' participants'+(tg.length?(' from the target group(s) '+tg.join(', ')):'')+' and was conducted over '+d.p.days+' days. The response from the participants was '+(fav>=85?'very encouraging':'encouraging')+'. ';
 if(d.g.ok)t+='The entry and exit assessment recorded a gain ratio of '+(d.g.gr*100).toFixed(2)+'%, confirming effective transfer of learning. ';
 t+='The sessions were handled by '+facWithDesig(d.p.pd)+' and '+facWithDesig(d.p.copd)+'. Suggestions received from participants regarding additional topics and duration will be considered while designing the next edition.';
 return t;}
/* ============ PROGRAMME EVALUATION REPORT — FULL EDITING ============
   Every narrative section, list and header field of the report can be
   overridden by the Programme Director. Overrides are stored against the
   programme and flow into the Word download. The percentage tables, the
   charts and the gain-ratio calculation stay computed from the collected
   data and are deliberately not editable.                              */
function perEditsAll(){return DB.claims.peredit||(DB.claims.peredit={});}
function perEdits(id){const a=perEditsAll();return a[id]||(a[id]={});}
function perOvAll(id){const e=perEdits(id);const o={};Object.keys(e).forEach(k=>{if(e[k]!=null&&(''+e[k]).trim()!=='')o[k]=e[k];});return o;}
function perEditCount(id){return Object.keys(perOvAll(id)).length;}
function perClearField(id,key){const e=perEdits(id);delete e[key];save();}
function perClearAll(id){delete perEditsAll()[id];save();}
function stripTags(s){return (''+(s==null?'':s)).replace(/<br\s*\/?>/gi,'\n').replace(/<[^>]+>/g,'').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').trim();}
function listText(arr){return (arr||[]).map(x=>x.text+(x.n>1?(' ('+x.n+' participants)'):'')).join('\n');}
function textLines(t){return (''+(t==null?'':t)).split(/\r?\n/).map(s=>s.trim()).filter(Boolean);}
const PER_FIELDS=[
 {k:'h_name',g:'Header details',l:'Name of the Programme',r:2},
 {k:'h_dur',g:'Header details',l:'Duration (Dates)',r:1},
 {k:'h_pd',g:'Header details',l:'Programme Director',r:1},
 {k:'h_copd',g:'Header details',l:'Co-Programme Director',r:1},
 {k:'h_tg',g:'Header details',l:'Target Group',r:1},
 {k:'h_np',g:'Header details',l:'No. of participants',r:1},
 {k:'h_dept',g:'Header details',l:'Sponsoring Department / Mode',r:1},
 {k:'intro',g:'Narrative',l:'Opening paragraph (before Section 1)',r:5},
 {k:'dur',g:'Narrative',l:'4 · Comments on the duration of the Programme',r:4},
 {k:'insights',g:'Narrative',l:'12 · Key Insights',list:1,r:9},
 {k:'pdc',g:'Narrative',l:'13 · Programme Director\u2019s Comments',r:6},
 {k:'concl',g:'Narrative',l:'14 · Conclusion',r:6},
 {k:'inadq',g:'Lists',l:'1 · Suggestions received where a rating was Not Adequate',list:1,r:4},
 {k:'addT',g:'Lists',l:'2a · Additional topic(s) to be included',list:1,r:5},
 {k:'excT',g:'Lists',l:'2b · Existing topic(s) to be excluded',list:1,r:4},
 {k:'notUse',g:'Lists',l:'3b · If not useful, why?',list:1,r:3},
 {k:'learn',g:'Lists',l:'6 · Important learning points',list:1,r:6},
 {k:'acts',g:'Lists',l:'7 · Steps proposed to utilise the learning',list:1,r:6},
 {k:'bImp',g:'Lists',l:'8 · Improvements suggested — Boarding',list:1,r:4},
 {k:'lImp',g:'Lists',l:'8 · Improvements suggested — Lodging',list:1,r:4},
 {k:'other',g:'Lists',l:'9 · Other suggestions',list:1,r:5},
 {k:'place',g:'Place, date & signature',l:'Place',r:1},
 {k:'date',g:'Place, date & signature',l:'Date',r:1},
 {k:'sig',g:'Place, date & signature',l:'Signatory (name)',r:1},
 {k:'sigrole',g:'Place, date & signature',l:'Designation',r:1},
 {k:'siginst',g:'Place, date & signature',l:'Institute',r:1}];
function perDefaults(d){
 const p=d.p;
 return {
  h_name:p.name+' ('+p.id+')',
  h_dur:p.days+' days · '+fmtLong(p.start)+' to '+fmtLong(endOf(p)),
  h_pd:facWithDesig(p.pd),
  h_copd:facWithDesig(p.copd),
  h_tg:(pTG(p).length?pTG(p).join(', '):'—'),
  h_np:''+d.R.length,
  h_dept:(pDept(p)||pType(p))+' · '+p.mode,
  intro:'The training programme was conducted at BIRD, Mangaluru and attended by <b>'+d.R.length+'</b> participants'+(pTG(p).length?(' from the target group(s) <b>'+pTG(p).join(', ')+'</b>'):'')+'. The sessions were handled by '+facWithDesig(p.pd)+' and '+facWithDesig(p.copd)+'. An evaluation was conducted at the end of the programme wherein <b>'+d.F.length+'</b> participants rated the programme. The percentage ranking based on ratings provided is tabulated and charted below.',
  dur:'The programme was conducted over <b>'+p.days+' days</b>. <b>'+(d.dur['Yes']||0)+'%</b> of the participants felt that the duration was adequate'+(((d.dur['No']||0)>0)?(', while <b>'+(d.dur['No']||0)+'%</b> indicated that it may be increased'+(d.durDays.length?' to '+d.durDays.join(' / ')+' days':'')):'')+'.',
  insights:perInsights(d).join('\n'),
  pdc:perPDComment(d),
  concl:perConclusion(d),
  inadq:listText(d.inadq),addT:listText(d.addT),excT:listText(d.excT),notUse:listText(d.notUse),
  learn:listText(d.learn),acts:listText(d.acts),bImp:listText(d.bImp),lImp:listText(d.lImp),other:listText(d.other),
  place:'Mangaluru',
  date:fmtLong(new Date().toISOString().slice(0,10)),
  sig:'('+p.pd+')',sigrole:'Programme Director',siginst:'BIRD, Mangaluru'};}
function perModel(id){const d=perData(id);return {d:d,p:d.p,g:d.g,def:perDefaults(d),ov:perOvAll(id)};}
function mTxt(M,key){return (M.ov[key]!=null)?esc(M.ov[key]):M.def[key];}
function mCount(M,key,arr){return (M.ov[key]!=null)?textLines(M.ov[key]).length:arr.length;}
function mList(M,key,arr,empty){
 const e='<p><i>'+(empty||'No specific suggestions were recorded.')+'</i></p>';
 if(M.ov[key]!=null){const L=textLines(M.ov[key]);
  return L.length?('<ul>'+L.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>'):e;}
 return arr.length?('<ul>'+arr.map(x=>'<li>'+esc(x.text)+(x.n>1?(' <i>('+x.n+' participants)</i>'):'')+'</li>').join('')+'</ul>'):e;}
function mBullets(M,key,defArr){
 const L=(M.ov[key]!=null)?textLines(M.ov[key]).map(esc):defArr;
 return '<ul>'+L.map(x=>'<li>'+x+'</li>').join('')+'</ul>';}
function pctRow(m,keys){return keys.map(k=>'<td style="text-align:center">'+(m[k]!=null?m[k]:0)+'</td>').join('');}
function perHTML(id,forWord){
 const M=perModel(id);const d=M.d;const p=M.p;const g=M.g;const W=!!forWord;
 const bT=(s)=>W?('<p style="font-family:Arial;font-size:11pt;margin:10px 0 4px"><b>'+s+'</b></p>'):('<h4>'+s+'</h4>');
 const cT=(s)=>'<p style="font-family:Arial;font-size:9.5pt;margin:8px 0 2px;color:#155c2e"><b>'+s+'</b></p>';
 let h='';
 if(W){h+='<table width="100%" cellspacing="0" cellpadding="6" border="1" style="border-collapse:collapse;margin-bottom:10px"><tr>'+
  '<td width="16%" style="text-align:center;vertical-align:middle;border:none"><img src="'+PER_LOGO+'" width="62"/></td>'+
  '<td style="text-align:center;vertical-align:middle;border:none">'+
  '<p style="font-family:Arial;font-size:13pt;margin:2px 0"><b>Bankers Institute of Rural Development (BIRD) Mangaluru</b></p>'+
  '<p style="font-family:Arial;font-size:11pt;margin:0">कार्यक्रम मूल्यांकन रिपोर्ट</p>'+
  '<p style="font-family:Arial;font-size:12pt;margin:0"><b>PROGRAMME EVALUATION REPORT</b></p></td>'+
  '<td width="16%" style="border:none"></td></tr></table>';}
 h+='<table border="1" cellspacing="0" cellpadding="5" style="width:100%;border-collapse:collapse">'+
  '<tr><td style="width:38%"><b>कार्यक्रम का नाम</b><br>Name of the Programme</td><td>'+mTxt(M,'h_name')+'</td></tr>'+
  '<tr><td><b>अवधि (तिथियां)</b><br>Duration (Dates)</td><td>'+mTxt(M,'h_dur')+'</td></tr>'+
  '<tr><td><b>कार्यक्रम निदेशक</b><br>Programme Director</td><td>'+mTxt(M,'h_pd')+'<br><span style="font-size:10pt">Co-PD: '+mTxt(M,'h_copd')+'</span></td></tr>'+
  '<tr><td><b>लक्षित समूह</b><br>Target Group</td><td>'+mTxt(M,'h_tg')+'</td></tr>'+
  '<tr><td><b>प्रतिभागियों की संख्या</b><br>No. of participants</td><td>'+mTxt(M,'h_np')+'</td></tr>'+
  '<tr><td><b>Sponsoring Department / Mode</b></td><td>'+mTxt(M,'h_dept')+'</td></tr></table>';
 h+=bT('कार्यक्रम के विभिन्न पहलुओं पर समेकित रेटिंग / Consolidated ratings of the programme, as given by participants');
 h+='<p>'+mTxt(M,'intro')+'</p>';
 h+=bT('1. कार्यक्रम संबंधी विचार / Comments on the Training Programme (in percentage)');
 h+='<table border="1" cellspacing="0" cellpadding="5" style="width:100%;border-collapse:collapse"><tr><th>Sl. No.</th><th>Item</th><th>Excellent</th><th>Good</th><th>Satisfactory</th><th>Not Adequate</th></tr>'+
  d.ratings.map((r,i)=>'<tr><td style="text-align:center">'+'abcd'[i]+'</td><td>'+r.label+'</td>'+pctRow(r.pct,RATE4)+'</tr>').join('')+'</table>';
 h+=cT('Chart 1 — Rating distribution across the four parameters (%)');h+=perStack(d.ratings,RATE4,32);
 if(mCount(M,'inadq',d.inadq)){h+='<p><b>Suggestions for improvement received:</b></p>'+mList(M,'inadq',d.inadq);}
 h+=bT('2. विषय जोड़ने/हटाने के सुझाव / Topics suggested to be included or excluded');
 const nAdd=mCount(M,'addT',d.addT),nExc=mCount(M,'excT',d.excT);
 h+='<p><b>a) Additional Topic(s) to be included</b> <i>('+nAdd+' suggestion'+(nAdd===1?'':'s')+')</i></p>'+mList(M,'addT',d.addT,'No additional topics were suggested.');
 h+='<p><b>b) Existing Topic(s) to be excluded</b> <i>('+nExc+' suggestion'+(nExc===1?'':'s')+')</i></p>'+mList(M,'excT',d.excT,'No topics were suggested for exclusion.');
 h+=bT('3. कार्यक्रम की उपयोगिता / Utility of the Programme (in percentage)');
 h+='<table border="1" cellspacing="0" cellpadding="5" style="width:100%;border-collapse:collapse"><tr><th>Utility to</th><th>Fully useful</th><th>Occasionally Useful</th><th>Not useful</th></tr>'+
  d.util.map(u=>'<tr><td>'+u.label+'</td>'+pctRow(u.pct,UTIL3)+'</tr>').join('')+'</table>';
 h+=cT('Chart 2 — Utility of the programme (%)');h+=perStack(d.util,UTIL3,32);
 h+='<p><b>b) यदि उपयोगी नहीं तो क्यों / If not useful, why?</b></p>'+mList(M,'notUse',d.notUse,'Not applicable; no adverse remarks were recorded.');
 h+=bT('4. कार्यक्रम की अवधि पर टिप्पणी / Comments on the duration of the Programme');
 h+='<p>'+mTxt(M,'dur')+'</p>';
 h+=cT('Chart 3 — Whether the duration was adequate (%)');h+=perStack([{label:'Duration adequate?',pct:d.dur}],YESNO,32);
 h+=bT('5. सत्रवार प्रतिक्रिया / Session-wise feedback (in percentage)');
 if(d.sess.length){h+='<table border="1" cellspacing="0" cellpadding="5" style="width:100%;border-collapse:collapse"><tr><th>Day</th><th>Session</th><th>Excellent</th><th>Good</th><th>Satisfactory</th><th>Not Adequate</th></tr>'+
  d.sess.map(s=>'<tr><td style="text-align:center"><b>Day '+s.day+'</b></td><td style="text-align:center">'+s.roman+'</td>'+pctRow(s.pct,RATE4)+'</tr>').join('')+'</table>';
  h+=cT('Chart 4 — Session-wise rating distribution (%)');
  h+=perStack(d.sess.map(s=>({label:'Day '+s.day+' – Session '+s.roman,pct:s.pct})),RATE4,32);}
 else h+='<p><i>Session-wise feedback was not recorded.</i></p>';
 h+=bT('6. प्रमुख शिक्षण-बिन्दु / Important learning points from the programme <span style="font-weight:400">('+mCount(M,'learn',d.learn)+')</span>');
 h+=mList(M,'learn',d.learn,'No learning points were recorded.');
 h+=bT('7. कार्यक्षेत्र में उपयोग हेतु प्रस्तावित कदम / Steps proposed to utilise the learning at workplace <span style="font-weight:400">('+mCount(M,'acts',d.acts)+')</span>');
 h+=mList(M,'acts',d.acts,'No specific actions were recorded.');
 h+=bT('8. आधारभूत संरचना पर टिप्पणी / Comment on the Infrastructure facilities');
 h+='<table border="1" cellspacing="0" cellpadding="5" style="width:100%;border-collapse:collapse"><tr><th>Facility</th><th>Excellent</th><th>Very Good</th><th>Good</th><th>Poor</th></tr>'+
  '<tr><td>Boarding</td>'+pctRow(d.board,INFRA4)+'</tr><tr><td>Lodging</td>'+pctRow(d.lodge,INFRA4)+'</tr></table>';
 h+=cT('Chart 5 — Infrastructure: boarding and lodging (%)');h+=perStack([{label:'Boarding',pct:d.board},{label:'Lodging',pct:d.lodge}],INFRA4,32);
 h+='<p><b>Improvements suggested — Boarding</b> <i>('+mCount(M,'bImp',d.bImp)+')</i></p>'+mList(M,'bImp',d.bImp,'No improvement was suggested for boarding.');
 h+='<p><b>Improvements suggested — Lodging</b> <i>('+mCount(M,'lImp',d.lImp)+')</i></p>'+mList(M,'lImp',d.lImp,'No improvement was suggested for lodging.');
 h+=bT('9. अन्य सुझाव / Other Suggestions <span style="font-weight:400">('+mCount(M,'other',d.other)+')</span>');
 h+=mList(M,'other',d.other,'No other suggestions were recorded.');
 h+=bT('10. प्रतिभागियों की रूपरेखा / Profile of Participants');
 h+=cT('Chart 6 — Participants by type of organisation');h+=perBars(d.orgTypes.map(x=>({label:x[0],v:x[1]})),'#2e86c1','',42);
 if(d.states.length){h+=cT('Chart 7 — Participants by State / Union Territory (top '+d.states.length+')');h+=perBars(d.states.map(x=>({label:x[0],v:x[1]})),'#7b2d8e','',30);}
 const gk=Object.keys(d.genders).filter(k=>d.genders[k]);
 if(gk.length){h+=cT('Chart 8 — Gender composition');h+=perBars(gk.map(k=>({label:k,v:d.genders[k],colour:(k==='Male'?'#2e86c1':k==='Female'?'#e0a33e':'#7b2d8e')})),'#2e86c1','',22);}
 h+=bT('11. Gain Ratio');
 if(g.ok){h+='<table border="1" cellspacing="0" cellpadding="5" style="width:100%;border-collapse:collapse"><tr><th rowspan="2">Range</th><th colspan="2">Entry level</th><th colspan="2">Exit level</th></tr><tr><th>Numbers</th><th>Score</th><th>Numbers</th><th>Score</th></tr>'+
  [0,1,2,3].map(i=>'<tr><td style="text-align:center">'+g.E.labels[i]+'</td><td style="text-align:center">'+g.E.counts[i]+'</td><td style="text-align:center">'+g.E.scores[i].toFixed(2)+'</td><td style="text-align:center">'+g.X.counts[i]+'</td><td style="text-align:center">'+g.X.scores[i].toFixed(2)+'</td></tr>').join('')+
  '<tr><td><b>Total</b></td><td style="text-align:center"><b>'+g.E.total+'</b></td><td style="text-align:center"><b>'+g.E.sum.toFixed(2)+'</b></td><td style="text-align:center"><b>'+g.X.total+'</b></td><td style="text-align:center"><b>'+g.X.sum.toFixed(2)+'</b></td></tr>'+
  '<tr><td><b>Weighted avg. score</b></td><td colspan="2" style="text-align:center"><b>'+g.E.avg.toFixed(2)+'</b></td><td colspan="2" style="text-align:center"><b>'+g.X.avg.toFixed(2)+'</b></td></tr></table>'+
  '<p style="font-size:12pt"><b>Gain Ratio: '+(g.gr*100).toFixed(2)+'%</b> &nbsp;<span style="font-size:10pt">= ('+g.X.avg.toFixed(2)+' − '+g.E.avg.toFixed(2)+') ÷ '+g.E.avg.toFixed(2)+'</span></p>';}
 else h+='<p><i>Entry / Exit test data is not available.</i></p>';
 h+=bT('12. मुख्य निष्कर्ष / Key Insights');h+=mBullets(M,'insights',perInsights(d));
 h+=bT('13. कार्यक्रम निदेशक के विचार / Programme Director\u2019s Comments');h+='<p>'+mTxt(M,'pdc')+'</p>';
 h+=bT('14. निष्कर्ष / Conclusion');h+='<p>'+mTxt(M,'concl')+'</p>';
 h+='<p style="margin-top:40px;font-size:10.5pt">Place&#160;: '+mTxt(M,'place')+'</p>'+
  '<p style="margin:0;font-size:10.5pt">Date&#160;&#160;: '+mTxt(M,'date')+'</p>'+
  '<p style="margin-top:26px;text-align:right;font-size:10.5pt">'+mTxt(M,'sig')+'</p>'+
  '<p style="margin:0;text-align:right;font-size:10.5pt"><b>'+mTxt(M,'sigrole')+'</b></p>'+
  '<p style="margin:0;text-align:right;font-size:10.5pt">'+mTxt(M,'siginst')+'</p>';
 return h;}
function perEditModal(id){
 const M=perModel(id);const p=M.p;const n=perEditCount(id);
 const groups=[];PER_FIELDS.forEach(f=>{if(groups.indexOf(f.g)<0)groups.push(f.g);});
 let body='';
 groups.forEach(gname=>{
  body+='<div class="deptgrp"><div class="hd"><span>'+esc(gname)+'</span><span>'+PER_FIELDS.filter(f=>f.g===gname).length+' field(s)</span></div><div style="padding:12px 14px">';
  PER_FIELDS.filter(f=>f.g===gname).forEach(f=>{
   const edited=(M.ov[f.k]!=null);
   const val=edited?M.ov[f.k]:stripTags(M.def[f.k]);
   body+='<div class="pef'+(edited?' on':'')+'"><label>'+esc(f.l)+
    (f.list?' <span style="font-weight:400;color:var(--muted)">— one item per line</span>':'')+
    (edited?' <span class="tag a">edited</span>':'')+
    '<button class="btn sm ghost" style="float:right;padding:2px 9px" onclick="perResetField(\''+id+'\',\''+f.k+'\')">↻ Reset</button></label>'+
    (f.r>1?('<textarea id="pe_'+f.k+'" rows="'+f.r+'">'+esc(val)+'</textarea>')
          :('<input id="pe_'+f.k+'" value="'+esc(val)+'">'))+'</div>';});
  body+='</div></div>';});
 openModal('<button class="x" onclick="closeModal()">✕</button><h3>✏️ Edit Programme Evaluation Report</h3>'+
  '<p style="color:var(--muted);font-size:13px;margin-top:6px"><b>'+esc(p.name)+'</b> <span class="pill">'+p.id+'</span>'+(n?(' · <span class="tag a">'+n+' field(s) edited</span>'):'')+'</p>'+
  '<div class="notice mt">Every narrative paragraph, list and header field below can be rewritten. The <b>percentage tables, the eight charts and the gain-ratio calculation are not editable</b> — they are computed from the registration, test and feedback data so that the report remains a true record of what was collected.</div>'+
  '<div class="mt" style="max-height:56vh;overflow:auto">'+body+'</div>'+
  '<div class="row mt" style="gap:8px"><button class="btn" style="flex:1" onclick="perSaveEdits(\''+id+'\')">💾 Save &amp; Preview</button>'+
  (n?'<button class="btn warn" onclick="perResetAllAsk(\''+id+'\')">↻ Reset entire report</button>':'')+
  '<button class="btn ghost" onclick="previewPER(\''+id+'\')">Cancel</button></div>',true);}
function perSaveEdits(id){
 const M=perModel(id);const e=perEdits(id);
 PER_FIELDS.forEach(f=>{
  const el=document.getElementById('pe_'+f.k);if(!el)return;
  const v=(el.value==null?'':el.value).trim();
  const def=stripTags(M.def[f.k]).trim();
  if(v===''||v===def)delete e[f.k];else e[f.k]=v;});
 save();closeModal();
 const n=perEditCount(id);
 toast(n?('Report saved ✓ · '+n+' field(s) now carry your wording'):'Report reset to the auto-generated wording ✓');
 previewPER(id);}
function perResetField(id,key){perClearField(id,key);toast('Section reset to the auto-generated text');perEditModal(id);}
function perResetAllAsk(id){
 openModal('<button class="x" onclick="closeModal()">✕</button><h3>↻ Reset entire report</h3>'+
  '<p style="margin-top:8px">Discard all <b>'+perEditCount(id)+'</b> edited field(s) and restore the auto-generated wording for <b>'+esc(prog(id).name)+'</b>?</p>'+
  '<div class="row" style="margin-top:14px"><button class="btn ghost" style="flex:1" onclick="perEditModal(\''+id+'\')">Cancel</button><button class="btn warn" style="flex:1" onclick="perResetAllConfirm(\''+id+'\')">↻ Reset entire report</button></div>');}
function perResetAllConfirm(id){perClearAll(id);closeModal();toast('Report reset to the auto-generated wording ✓');previewPER(id);}
function perWordDoc(id){const p=prog(id);
 return '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>Programme Evaluation Report — '+p.name+'</title>'+
 '<!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View><w:Zoom>100</w:Zoom></w:WordDocument></xml><![endif]-->'+
 '<style>@page{size:21cm 29.7cm;margin:2cm}body{font-family:"Times New Roman",serif;font-size:11pt;line-height:1.4;color:#000}'+
 'table{border-collapse:collapse;width:100%;font-size:10pt}th{background:#e6f2ea;font-family:Arial;font-size:9.5pt;text-align:center}'+
 'td{font-size:10pt}ul{margin:4px 0 8px 20px}li{margin:2px 0}p{margin:6px 0}</style></head><body>'+perHTML(id,true)+'</body></html>';}
function downloadPER(id){const p=prog(id);const blob=new Blob(['\ufeff'+perWordDoc(id)],{type:'application/msword'});
 const url=URL.createObjectURL(blob);const a=document.createElement('a');
 a.href=url;a.download='PER_'+p.id+'_'+p.name.replace(/[^\w\- ]+/g,'').replace(/\s+/g,'_').slice(0,50)+'.doc';
 document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);toast('Programme Evaluation Report downloaded ✓');}
function previewPER(id){const p=prog(id);const st=perReady(id);
 if(!st.ok){toast('Registration, test and feedback data are all required');return;}
 const dp=dupInfo(id,'feedback');const n=perEditCount(id);const can=(ROLE==='Admin'||ROLE==='PD/Co-PD');
 openModal('<button class="x" onclick="closeModal()">✕</button><h3>📄 Programme Evaluation Report</h3><p style="color:var(--muted);font-size:13px;margin-top:6px"><b>'+esc(p.name)+'</b> <span class="pill">'+p.id+'</span> · compiled from '+st.reg+' registrations, '+st.tests+' test scores and '+st.fb+' feedback responses'+(n?(' · <span class="tag a">✏️ '+n+' field(s) edited</span>'):'')+'</p>'+
 (dp.dup?('<div class="notice amber mt">⚠️ '+dp.dup+' duplicate feedback row(s) are inflating the figures in this report. Clear them first from the Feedback tab.</div>'):'')+
 '<div class="row mt" style="gap:8px"><button class="btn" onclick="downloadPER(\''+id+'\')">⬇️ Download Word (.doc)</button>'+
 (can?('<button class="btn sec" onclick="perEditModal(\''+id+'\')">✏️ Edit Report</button>'):'')+
 (can&&n?('<button class="btn warn" onclick="perResetAllAsk(\''+id+'\')">↻ Reset to auto-generated</button>'):'')+'</div>'+
 '<div class="perprev mt">'+perHTML(id,false)+'</div>',true);}
function pdCommentModal(id){perEditModal(id);}
function savePDComment(id){DB.claims.percmt[id]=$('#pd_cmt').value.trim();save();closeModal();toast('Comments saved ✓');previewPER(id);}
function resetPDComment(id){delete DB.claims.percmt[id];save();closeModal();toast('Reset to default');previewPER(id);}
function downloadAllPER(){const fy=currentFY();const ps=progsInFY(fy).filter(p=>perReady(p.id).ok);if(!ps.length){toast('No programme has complete data yet');return;}
 let i=0;const next=()=>{if(i>=ps.length){toast('Downloaded '+ps.length+' report(s) ✓');return;}downloadPER(ps[i].id);i++;setTimeout(next,700);};next();}
const A11Y_KEY='birdm_a11y';const FONT_STEPS=[85,92,100,115,130];let a11y={font:2,theme:''};
function loadA11y(){try{a11y=Object.assign(a11y,JSON.parse(localStorage.getItem(A11Y_KEY))||{});}catch(e){}applyA11y();}
function saveA11y(){localStorage.setItem(A11Y_KEY,JSON.stringify(a11y));}
function applyA11y(){const w=document.getElementById('view');if(w)w.style.zoom=(FONT_STEPS[a11y.font]/100);document.body.classList.remove('theme-dark','theme-contrast');if(a11y.theme)document.body.classList.add(a11y.theme);}
function setFont(d){if(d===0)a11y.font=2;else a11y.font=Math.max(0,Math.min(4,a11y.font+d));saveA11y();applyA11y();}
function setTheme(t){a11y.theme=t;saveA11y();applyA11y();toast(t==='theme-dark'?'Dark theme on':t==='theme-contrast'?'High-contrast on':'Default theme');}
loadA11y();
document.querySelectorAll('.role').forEach(r=>r.onclick=()=>{document.querySelectorAll('.role').forEach(x=>x.classList.remove('active'));r.classList.add('active');ROLE=r.dataset.role;$('#uid').value=ROLE==='Admin'?'admin':ROLE==='PD/Co-PD'?'pd':'user';});
function doLogin(){const id=$('#uid').value.trim()||'admin';ROLE=document.querySelector('.role.active').dataset.role;USER=id;$('#login').style.display='none';$('#app').style.display='block';$('#tRole').textContent=ROLE;$('#tUser').textContent=USER;applyRole();navTo('dashboard');}
function logout(){$('#app').style.display='none';$('#login').style.display='flex'}
function applyRole(){const allow={'Admin':['dashboard','programmes','registration','assessment','feedback','pdb','claims','export','users'],'PD/Co-PD':['dashboard','programmes','registration','assessment','feedback','pdb','claims','export'],'General':['dashboard','claims']}[ROLE];document.querySelectorAll('#nav a').forEach(a=>a.style.display=allow.includes(a.dataset.p)?'flex':'none');}
const RENDER={dashboard:vDash,programmes:vProg,registration:vReg,assessment:vAssess,feedback:vFeed,pdb:vPDB,claims:vClaims,export:vExport,users:vUsers};
function render(p){CURPAGE=p;closeSortMenu();RENDER[p]();window.scrollTo(0,0)}
function navTo(p){document.querySelectorAll('#nav a').forEach(a=>a.classList.toggle('active',a.dataset.p===p));document.querySelector('.side').classList.remove('open');SEL={registration:null,assessment:null,feedback:null,programmes:null};SUB='';TSORT={};render(p);}
document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>navTo(a.dataset.p));
function openWS(pg,id,t){SEL[pg]=id;SUB=t;TSORT={};render(pg)}
function backTo(pg){SEL[pg]=null;SUB='';TSORT={};render(pg)}
function setSub(pg,t){SUB=t;render(pg)}
function setFY(v,pg){FY=v;render(pg)}
function setPSort(pg,v){PSORT[pg]=v;render(pg);}
function sortByDate(l,m){const a=l.slice().sort((x,y)=>(''+x.start).localeCompare(''+y.start));if(m==='new')a.reverse();return a;}
function sortControl(pg){return '<div style="display:flex;align-items:center;gap:8px"><label style="margin:0;white-space:nowrap">↕️ Sort by Date</label><select style="width:auto;padding:8px 10px" onchange="setPSort(\''+pg+'\',this.value)"><option value="new" '+(PSORT[pg]==='new'?'selected':'')+'>New → Old</option><option value="old" '+(PSORT[pg]==='old'?'selected':'')+'>Old → New</option></select></div>';}
const RATE_COLORS={'Excellent':'#1f7a3f','Good':'#2e86c1','Satisfactory':'#e67e22','Not Adequate':'#c0392b','Very Good':'#27ae60','Poor':'#c0392b','Very Useful':'#1f7a3f','Occasionally Useful':'#e67e22','Not Useful':'#c0392b','Yes':'#1f7a3f','No':'#c0392b'};
function rateColors(k){return k.map(x=>RATE_COLORS[x]||'#66756c');}
function barChart(m,c){c=c||'var(--green)';const mx=Math.max(1,...Object.values(m));return Object.entries(m).map(([k,v])=>'<div class="bar"><div class="lb">'+k+'</div><div class="track"><div class="fill" style="width:'+Math.max(8,v/mx*100)+'%;background:'+c+'">'+v+'</div></div></div>').join('')||'<div class="empty">No data yet</div>';}
function barChartDrill(m,c,fn){const mx=Math.max(1,...Object.values(m));return Object.entries(m).map(([k,v])=>'<div class="bar" title="Double-click for break-up" style="cursor:pointer" ondblclick="'+fn+'(\''+(k+'').replace(/'/g,"\\'")+'\')"><div class="lb">'+k+'</div><div class="track"><div class="fill" style="width:'+Math.max(8,v/mx*100)+'%;background:'+c+'">'+v+'</div></div></div>').join('')||'<div class="empty">No data yet</div>';}
function donut(m,cs){const tot=Object.values(m).reduce((a,b)=>a+b,0)||1;let acc=0,st=[],lg='';Object.entries(m).forEach(([k,v],i)=>{const c=cs[i%cs.length];const s=acc/tot*360,e=(acc+v)/tot*360;acc+=v;st.push(c+' '+s+'deg '+e+'deg');lg+='<div><span class="sw" style="background:'+c+'"></span>'+k+' — <b>'+v+'</b> ('+Math.round(v/tot*100)+'%)</div>';});return '<div class="donut-wrap"><div style="width:120px;height:120px;border-radius:50%;flex-shrink:0;background:conic-gradient('+st.join(',')+')"><div class="donut-center" style="width:64px;height:64px;background:#fff;border-radius:50%;position:relative;top:28px;left:28px;display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--green-d)">'+tot+'</div></div><div class="legend">'+(lg||'<div class="empty">No data</div>')+'</div></div>';}
function donutDrill(m,cs,fn){const tot=Object.values(m).reduce((a,b)=>a+b,0)||1;let acc=0,st=[],lg='';Object.entries(m).forEach(([k,v],i)=>{const c=cs[i%cs.length];const s=acc/tot*360,e=(acc+v)/tot*360;acc+=v;st.push(c+' '+s+'deg '+e+'deg');lg+='<div title="Double-click for break-up" style="cursor:pointer" ondblclick="'+fn+'(\''+(k+'').replace(/'/g,"\\'")+'\')"><span class="sw" style="background:'+c+'"></span>'+k+' — <b>'+v+'</b> ('+Math.round(v/tot*100)+'%)</div>';});return '<div class="donut-wrap"><div style="width:120px;height:120px;border-radius:50%;flex-shrink:0;background:conic-gradient('+st.join(',')+')"><div class="donut-center" style="width:64px;height:64px;background:#fff;border-radius:50%;position:relative;top:28px;left:28px;display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--green-d)">'+tot+'</div></div><div class="legend">'+(lg||'<div class="empty">No data</div>')+'</div></div>';}
function vGroupedBar(rows,aL,aC,bL,bC,fmt,fn){fmt=fmt||(x=>x);const mx=Math.max(1,...rows.map(r=>Math.max(r.a,r.b)));const H=170;const lg='<div class="chart-legend"><span><span class="sw" style="background:'+aC+'"></span>'+aL+'</span><span><span class="sw" style="background:'+bC+'"></span>'+bL+'</span></div>';const col=r=>{const ha=Math.max(3,Math.round(r.a/mx*H)),hb=Math.max(3,Math.round(r.b/mx*H));const d=fn?(' ondblclick="'+fn+'(\''+(r.key||'').replace(/'/g,"\\'")+'\')" title="Double-click for break-up"'):'';return '<div class="vbar-col"'+d+'><div class="vbar-pair"><div class="vbar-item"><div class="vval">'+fmt(r.a)+'</div><div class="vfill" style="height:'+ha+'px;background:'+aC+'"></div></div><div class="vbar-item"><div class="vval">'+fmt(r.b)+'</div><div class="vfill" style="height:'+hb+'px;background:'+bC+'"></div></div></div><div class="vlabel">'+r.label+'</div>'+(r.sub?'<div class="vsub">'+r.sub+'</div>':'')+'</div>';};return lg+(rows.length?'<div class="vchart">'+rows.map(col).join('')+'</div>'+(fn?'<p style="font-size:11px;color:var(--muted);margin:8px 0 0">💡 Double-click a department column for the detailed break-up</p>':''):'<div class="empty">No data</div>');}
function orgBreakup(t){const fy=currentFY();const rows=regInFY(fy).filter(x=>aOrgType(x)===t);const m=sortDesc(count(rows,x=>aOrg(x)));openModal('<button class="x" onclick="closeModal()">✕</button><h3>🏦 '+t+' — Break-up</h3><p style="color:var(--muted);font-size:13px">FY '+fy+' — total <b>'+rows.length+'</b></p><div class="mt"><div class="tblwrap5"><table><thead><tr><th>Organisation</th><th style="text-align:right">Participants</th></tr></thead><tbody>'+Object.entries(m).map(([o,n])=>'<tr><td>'+o+'</td><td style="text-align:right"><b>'+n+'</b></td></tr>').join('')+'</tbody></table></div></div>');}
function modeBreakup(md){const fy=currentFY();const ps=progsInFY(fy).filter(p=>(p.mode||'—')===md);openModal('<button class="x" onclick="closeModal()">✕</button><h3>💻 '+md+' — Break-up</h3><p style="color:var(--muted);font-size:13px">FY '+fy+' — <b>'+ps.length+'</b> programme(s)</p><div class="mt"><table><thead><tr><th>Programme</th><th>PD</th><th style="text-align:right">Participants</th></tr></thead><tbody>'+ps.map(p=>'<tr><td><span class="pill">'+p.id+'</span> '+p.name+'</td><td>'+p.pd+'</td><td style="text-align:right"><b>'+partCount(p)+'</b></td></tr>').join('')+'</tbody></table></div>');}
function directorBreakup(role,per){const fy=currentFY();const ps=progsInFY(fy).filter(p=>(p[role]||'—')===per);openModal('<button class="x" onclick="closeModal()">✕</button><h3>'+(role==='pd'?'🎓':'🤝')+' '+per+'</h3><p style="color:var(--muted);font-size:13px">FY '+fy+' — <b>'+ps.length+'</b> programme(s)</p><div class="mt"><div style="overflow:auto"><table><thead><tr><th>Programme</th><th>Dates</th><th style="text-align:right">Participants</th><th style="text-align:right">Gain Ratio</th></tr></thead><tbody>'+ps.map(p=>{const g=gainRatio(p.id);return '<tr><td><span class="pill">'+p.id+'</span> '+p.name+'</td><td style="font-size:12px">'+fmtDate(p.start)+' → '+fmtDate(endOf(p))+'</td><td style="text-align:right"><b>'+partCount(p)+'</b></td><td style="text-align:right">'+(g.ok?(g.gr*100).toFixed(2)+'%':'—')+'</td></tr>';}).join('')+'</tbody></table></div></div>');}
function pdBreakup(p){directorBreakup('pd',p);}
function copdBreakup(p){directorBreakup('copd',p);}
function ptypeBreakup(t){const fy=currentFY();const ps=progsInFY(fy).filter(p=>pType(p)===t);openModal('<button class="x" onclick="closeModal()">✕</button><h3>🗂️ '+t+' Programmes</h3><p style="color:var(--muted);font-size:13px">FY '+fy+' — <b>'+ps.length+'</b> programme(s)</p><div class="mt"><div style="overflow:auto;max-height:56vh"><table><thead><tr><th>Programme</th><th>PD / Co-PD</th><th>Dates</th><th style="text-align:right">Participants</th></tr></thead><tbody>'+ps.map(p=>'<tr><td><span class="pill">'+p.id+'</span> '+p.name+'</td><td style="font-size:12px">'+p.pd+' /<br>'+p.copd+'</td><td style="font-size:12px">'+fmtDate(p.start)+' → '+fmtDate(endOf(p))+'</td><td style="text-align:right"><b>'+partCount(p)+'</b></td></tr>').join('')+'</tbody></table></div></div>');}
function fySelector(pg){const l=fyList(),c=currentFY();return '<div class="fybox"><label>📅 Financial Year</label><select onchange="setFY(this.value,\''+pg+'\')">'+l.map(f=>'<option value="'+f+'" '+(f===c?'selected':'')+'>FY '+f+'</option>').join('')+'</select></div>';}
function vDash(){const fy=currentFY();const ps=progsInFY(fy);const R=regInFY(fy);const F=fbInFY(fy);const td=trainingDays(ps);const avg=ps.length?(R.length/ps.length).toFixed(1):0;const imp=orderBy(countIn(F,FB_IMPRESSION,RATE4),RATE4);
 const dupF=dupTotals('feedback'),dupR=dupTotals('registration');
 const warn=(dupF.rows||dupR.rows)?('<div class="notice amber">⚠️ Duplicate responses detected — '+
   (dupF.rows?('<b>'+dupF.rows+'</b> feedback row(s) across '+dupF.progs+' programme(s)'):'')+
   ((dupF.rows&&dupR.rows)?' and ':'')+
   (dupR.rows?('<b>'+dupR.rows+'</b> registration row(s) across '+dupR.progs+' programme(s)'):'')+
   '. These inflate the counts on every chart while leaving the percentages unchanged. '+
   (dupF.rows?'<button class="btn sm warn" style="margin-left:6px" onclick="dupCleanAll(\'feedback\')">🧹 Clean feedback</button>':'')+
   (dupR.rows?'<button class="btn sm warn" style="margin-left:6px" onclick="dupCleanAll(\'registration\')">🧹 Clean registrations</button>':'')+'</div>'):'';
 $('#view').innerHTML='<div class="page-h"><div><h2>Dashboard</h2><p>Overview for the selected financial year</p></div>'+fySelector('dashboard')+'</div>'+warn+
 '<div class="kpis"><div class="kpi"><div class="n">'+ps.length+'</div><div class="l">Total Programmes</div></div><div class="kpi b"><div class="n">'+R.length+'</div><div class="l">Total Participants</div></div><div class="kpi p"><div class="n">'+avg+'</div><div class="l">Avg. Participants / Prog.</div></div><div class="kpi o"><div class="n">'+td+'</div><div class="l">Total Training Days<br><span style="font-size:10px">(participants × days)</span></div></div></div>'+
 '<div class="dashgrid">'+
 '<div class="card s1"><div class="chart-title">💻 Delivery Mode</div>'+donutDrill(count(ps,x=>x.mode),['#1f7a3f','#2e86c1','#e67e22'],'modeBreakup')+'</div>'+
 '<div class="card s2"><div class="chart-title">🗂️ Type of Programme</div>'+donutDrill(sortDesc(count(ps,x=>pType(x))),['#2e86c1','#e67e22'],'ptypeBreakup')+'</div>'+
 '<div class="card s1"><div class="chart-title">👥 Gender</div>'+donut(count(R,x=>aGender(x)),['#2e86c1','#e67e22','#7b2d8e'])+'</div>'+
 '<div class="card s2"><div class="chart-title">🏦 Organisation Type</div><div class="scrollchart">'+barChartDrill(sortDesc(count(R,x=>aOrgType(x))),'var(--purple)','orgBreakup')+'</div></div>'+
 '<div class="card s2"><div class="chart-title">🗺️ State-wise Participation</div><div class="scrollchart">'+barChart(sortDesc(count(R,x=>aState(x))))+'</div></div>'+
 '<div class="card s2"><div class="chart-title">🎓 PD-wise Programme Count</div>'+barChartDrill(sortDesc(count(ps,x=>x.pd)),'var(--purple)','pdBreakup')+'</div>'+
 '<div class="card s2"><div class="chart-title">🤝 Co-PD-wise Programme Count</div>'+barChartDrill(sortDesc(count(ps,x=>x.copd)),'var(--blue)','copdBreakup')+'</div>'+
 '<div class="card s2"><div class="chart-title">⭐ Overall Impression received from Participants <span style="font-weight:400;color:var(--muted);font-size:12px">'+F.length+' feedback</span></div>'+donut(imp,rateColors(Object.keys(imp)))+'</div>'+
 '<div class="card s2"><div class="chart-title">🧑‍🤝‍🧑 Category of Participants</div>'+donut(sortDesc(count(R,x=>aCategory(x))),['#1f7a3f','#2e86c1','#e67e22','#7b2d8e','#c0392b','#66756c'])+'</div>'+
 '</div>';}
function applyFilters(pg,l){const f=PFILT[pg];if(f.mode!=='All')l=l.filter(p=>p.mode===f.mode);if(f.ptype!=='All')l=l.filter(p=>pType(p)===f.ptype);if(f.sdept!=='All')l=l.filter(p=>pDept(p)===f.sdept);if(f.tg&&f.tg!=='All')l=l.filter(p=>pTG(p).indexOf(f.tg)>=0);if(f.date)l=l.filter(p=>endOf(p)>=f.date);if(f.endDate)l=l.filter(p=>p.start<=f.endDate);if(f.search.trim()){const s=f.search.trim().toLowerCase();l=l.filter(p=>p.name.toLowerCase().includes(s)||(''+p.id).toLowerCase().includes(s)||(p.pd||'').toLowerCase().includes(s)||pTG(p).join(' ').toLowerCase().includes(s));}return l;}
function filterActive(pg){const f=PFILT[pg];return f.mode!=='All'||f.ptype!=='All'||f.sdept!=='All'||(f.tg&&f.tg!=='All')||f.date||f.endDate||f.search.trim();}
function filterBar(pg){const f=PFILT[pg];const modes=['All','In House','Online','On Location'];
 const dep=(pg==='programmes')?'<div class="col" style="max-width:230px"><label>🏛️ Sponsor Department</label><select onchange="PFILT[\''+pg+'\'].sdept=this.value;render(\''+pg+'\')"><option '+(f.sdept==='All'?'selected':'')+'>All</option>'+usedDepts().map(d=>'<option '+(f.sdept===d?'selected':'')+'>'+d+'</option>').join('')+'</select></div>':'';
 const tgs=tgUsed();
 const tgf='<div class="col" style="max-width:200px"><label>🎯 Target Group</label><select onchange="PFILT[\''+pg+'\'].tg=this.value;render(\''+pg+'\')"><option '+((!f.tg||f.tg==='All')?'selected':'')+'>All</option>'+tgs.map(t=>'<option '+(f.tg===t?'selected':'')+'>'+t+'</option>').join('')+'</select></div>';
 return '<div class="card" style="padding:14px 16px"><div class="row" style="align-items:flex-end"><div class="col" style="min-width:190px"><label>🔍 Search by name / code / PD / target group</label><input id="flt_search_'+pg+'" value="'+esc(f.search)+'" oninput="PFILT[\''+pg+'\'].search=this.value;render(\''+pg+'\')"></div><div class="col" style="max-width:160px"><label>💻 Mode</label><select onchange="PFILT[\''+pg+'\'].mode=this.value;render(\''+pg+'\')">'+modes.map(m=>'<option '+(f.mode===m?'selected':'')+'>'+m+'</option>').join('')+'</select></div><div class="col" style="max-width:170px"><label>🗂️ Type of Programme</label><select onchange="PFILT[\''+pg+'\'].ptype=this.value;render(\''+pg+'\')"><option '+(f.ptype==='All'?'selected':'')+'>All</option>'+PROG_TYPES.map(t=>'<option '+(f.ptype===t?'selected':'')+'>'+t+'</option>').join('')+'</select></div>'+dep+tgf+'<div class="col" style="max-width:160px"><label>📅 From Date</label><input type="date" value="'+f.date+'" onchange="PFILT[\''+pg+'\'].date=this.value;render(\''+pg+'\')"></div><div class="col" style="max-width:160px"><label>📅 To Date</label><input type="date" value="'+f.endDate+'" onchange="PFILT[\''+pg+'\'].endDate=this.value;render(\''+pg+'\')"></div><div style="flex-shrink:0">'+(filterActive(pg)?'<button class="btn ghost sm" onclick="clearFilter(\''+pg+'\')">✕ Clear</button>':'')+'</div></div></div>';}
function clearFilter(pg){PFILT[pg]={mode:'All',ptype:'All',sdept:'All',tg:'All',date:'',endDate:'',search:''};render(pg);}
function restoreSearchFocus(pg){const el=document.getElementById('flt_search_'+pg);if(el&&PFILT[pg].search){el.focus();el.setSelectionRange(el.value.length,el.value.length);}}
function readSheet(file,cb){const rd=new FileReader();rd.onload=ev=>{let rows=[];try{if(window.XLSX&&!window.__noXLSX){const wb=XLSX.read(ev.target.result,{type:'binary'});rows=XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]],{header:1,blankrows:false,raw:false,defval:''});}else{rows=ev.target.result.split(/\r?\n/).filter(Boolean).map(l=>l.split(','));}}catch(e){toast('Could not read the file');return;}cb(rows);};if(window.XLSX&&!window.__noXLSX)rd.readAsBinaryString(file);else rd.readAsText(file);}
function headerIndex(rows){const h=(rows[0]||[]).map(c=>(''+c).trim().toLowerCase());return {h,idx:n=>h.findIndex(x=>x===n.toLowerCase()),body:rows.slice(1)};}
function downloadTemplate(rows,name){if(window.XLSX&&!window.__noXLSX){const ws=XLSX.utils.aoa_to_sheet(rows),wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'Template');XLSX.writeFile(wb,name+'.xlsx');toast('Template downloaded ✓');}else{csv(rows,name+'.csv');}}
function pickFile(cb){const i=document.createElement('input');i.type='file';i.accept='.xlsx,.xls,.csv';let used=false;
 i.onchange=e=>{if(used)return;used=true;const f=e.target.files[0];if(f)readSheet(f,cb);};i.click();}
function ensureProg(id){if(!DB.forms[id])DB.forms[id]={registration:[],entry:[],exit:[],feedback:[]};if(!DB.responses[id])DB.responses[id]={registration:[],feedback:[],tests:[]};}
function normDate(v){if(v==null)return '';let s=(''+v).trim();if(!s)return '';let m=s.match(/^(\d{4})-(\d{2})-(\d{2})/);if(m)return m[1]+'-'+m[2]+'-'+m[3];m=s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);if(m)return m[3]+'-'+String(m[2]).padStart(2,'0')+'-'+String(m[1]).padStart(2,'0');const d=new Date(s);if(!isNaN(d))return d.toISOString().slice(0,10);return '';}
function sampleAns(f){
 if(f.type==='Participant')return 'Anita Rao';
 if(f.options&&f.options.length)return f.options[0];
 const L=(f.label||'').toLowerCase();
 if(/^name$/.test(L)||/full name/.test(L))return 'Anita Rao';
 if(/contact person/.test(L)&&/mobile|number/.test(L))return '9845099887';
 if(/contact person/.test(L))return 'Ravi Rao';
 if(/mobile/.test(L))return '9845012321';
 if(/e-?mail/.test(L))return 'anita.rao@example.in';
 if(/age/.test(L))return '38';
 if(/designation/.test(L))return 'Manager';
 if(/organisation|organization|bank|institute/.test(L))return 'Karnataka Gramin Bank';
 if(/state|union territory/.test(L))return 'Karnataka';
 if(/duties|assignment/.test(L))return 'Credit appraisal';
 if(/days suggested/.test(L))return '4';
 if(/learning point/.test(L))return 'Structured credit appraisal approach';
 if(/steps|action you propose/.test(L))return 'Share the learning with the branch team';
 if(/additional topic/.test(L))return 'More case studies from RRBs';
 if(/excluded/.test(L))return 'The introductory session may be shortened';
 if(/other suggestion/.test(L))return 'Duration may be extended by a day';
 if(/boarding/.test(L)&&/improve/.test(L))return 'Improve variety in the menu';
 if(/lodging/.test(L)&&/improve/.test(L))return 'Wi-Fi speed may be improved';
 if(f.type==='Number')return '0';
 return '';}
function firstProgCode(){const l=DB.programmes.slice().sort((a,b)=>(''+b.start).localeCompare(''+a.start));return l.length?l[0].id:'TP2601';}
function regTemplate(id){const form=(id&&DB.forms[id]&&DB.forms[id].registration.length)?DB.forms[id].registration:stdRegForm();
 const code=id||firstProgCode();
 downloadTemplate([['Programme Code'].concat(form.map(f=>f.label)),[code].concat(form.map(sampleAns))],'Registration_Template'+(id?('_'+id):''));}
function feedbackTemplate(id){const form=(id&&DB.forms[id]&&DB.forms[id].feedback.length)?DB.forms[id].feedback:stdFeedbackForm();
 const code=id||firstProgCode();
 downloadTemplate([['Programme Code'].concat(form.map(f=>f.label)),[code].concat(form.map(sampleAns))],'Feedback_Template'+(id?('_'+id):''));}
function testTemplate(id){const code=id||firstProgCode();
 const rows=[['Programme Code','Participant','Entry Score','Exit Score','Maximum Marks']];
 if(id&&DB.responses[id]){const by=testsByName(id);const names=registeredNames(id);
  const all=names.length?names:by.map(x=>x.name);const mx=gainRatio(id).maxT||20;
  all.forEach(n=>{const r=by.find(x=>normName(x.name)===normName(n))||{};
   rows.push([id,n,r.entry?r.entry.score:'',r.exit?r.exit.score:'',(r.entry&&r.entry.total)||(r.exit&&r.exit.total)||mx]);});}
 if(rows.length===1){rows.push([code,'Anita Rao',7,15,20]);rows.push([code,'Ravi Kumar',9,17,20]);}
 downloadTemplate(rows,'EntryExit_Scores_Template'+(id?('_'+id):''));}
function formFromHeader(existing,labels,kind){
 const out=[];
 labels.forEach(lb=>{
  const prev=(existing||[]).find(f=>f.label===lb);
  if(prev){out.push(prev);return;}
  const std=(kind==='registration'?stdRegForm():stdFeedbackForm()).find(f=>f.label===lb);
  if(std){out.push(std);return;}
  out.push({label:lb,type:'Short text',options:[],required:false});});
 if(kind==='feedback'&&!out.some(f=>f.type==='Participant')){
  const n=out.find(f=>/^name$/i.test(f.label));if(n)n.type='Participant';}
 return out;}
/* ============ IMPORT — parse first, then Replace or Add ============
   Uploading the same sheet twice used to append the rows a second time, which
   doubled every count and every comment multiplier while leaving the
   percentages unchanged. The sheet is now parsed first; if the programme
   already holds responses the user chooses Replace (default) or Add, and in
   either case rows identical to one already stored are skipped.          */
function parseSheet(kind,rows){
 if(!rows||!rows.length)return {err:'The file is empty'};
 const hdr=(rows[0]||[]).map(c=>(''+c).trim());
 const ci=hdr.findIndex(h=>/^programme\s*code$/i.test(h));
 if(ci<0)return {err:'Row 1 must include a "Programme Code" column'};
 const qcols=hdr.map((h,i)=>({label:h,i:i})).filter(o=>o.i!==ci&&o.label!=='');
 if(!qcols.length)return {err:'No question columns found in row 1'};
 const labels=qcols.map(o=>o.label);
 const byProg={};let skipped=0,blank=0;
 rows.slice(1).forEach(r=>{
  const code=(''+((r[ci]==null?'':r[ci])+'')).trim();
  if(!code||!prog(code)){skipped++;return;}
  const a={};let any=false;
  qcols.forEach(o=>{const v=(''+(r[o.i]==null?'':r[o.i])).trim();a[o.label]=v;if(v!=='')any=true;});
  if(!any){blank++;return;}
  (byProg[code]=byProg[code]||[]).push(a);});
 return {kind,labels,byProg,skipped,blank,progs:Object.keys(byProg)};}
function applyImport(mode){
 const P=PENDIMPORT;if(!P)return;
 let added=0,dupSkipped=0,replaced=0;
 P.progs.forEach(code=>{
  ensureProg(code);
  DB.forms[code][P.kind]=formFromHeader(DB.forms[code][P.kind],P.labels,P.kind);
  const store=DB.responses[code][P.kind];
  if(mode==='replace'){replaced+=store.length;store.length=0;}
  const seen=new Set(store.map(r=>respFingerprint(r.answers,P.labels)));
  P.byProg[code].forEach(a=>{
   const k=respFingerprint(a,P.labels);
   if(seen.has(k)){dupSkipped++;return;}
   seen.add(k);store.push({answers:a,at:prog(code).start});added++;});});
 save();closeModal();
 const what=(P.kind==='registration')?'Registration':'Feedback';
 let msg=what+': '+added+' response(s) '+(mode==='replace'?'imported (previous '+replaced+' replaced)':'added');
 if(dupSkipped)msg+=' · '+dupSkipped+' identical row(s) skipped';
 if(P.skipped)msg+=' · '+P.skipped+' row(s) had no matching programme code';
 PENDIMPORT=null;toast(msg+' ✓');render(P.kind==='registration'?'registration':'feedback');}
function importQuestionnaire(kind,rows,pageKey){
 const P=parseSheet(kind,rows);
 if(P.err){toast(P.err);return;}
 if(!P.progs.length){toast('No matching programme code found — nothing imported');return;}
 PENDIMPORT=P;
 const nRows=P.progs.reduce((s,c)=>s+P.byProg[c].length,0);
 const existing=P.progs.reduce((s,c)=>s+(((DB.responses[c]&&DB.responses[c][kind])||[]).length),0);
 const what=(kind==='registration')?'registration':'feedback';
 if(!existing){applyImport('replace');return;}          /* nothing stored yet — just load it */
 openModal('<button class="x" onclick="closeModal();PENDIMPORT=null">✕</button><h3>📥 Import '+((kind==='registration')?'Registrations':'Feedback')+'</h3>'+
  '<p style="color:var(--muted);font-size:13px;margin-top:6px">The sheet holds <b>'+nRows+'</b> '+what+' row(s) for <b>'+P.progs.length+'</b> programme(s): '+P.progs.map(c=>'<span class="pill">'+c+'</span>').join(' ')+'</p>'+
  '<div class="notice amber mt">⚠️ <b>'+existing+'</b> '+what+' response(s) are already stored for these programmes. Choose how the upload should be applied — adding a sheet that has already been loaded is what doubles the counts.</div>'+
  '<div class="mt">'+
  '<div class="impopt" onclick="applyImport(\'replace\')"><span class="ic">♻️</span><div><b>Replace the stored responses (recommended)</b><span>The '+existing+' existing row(s) are cleared and the '+nRows+' row(s) from this sheet are loaded. Uploading the same sheet again therefore changes nothing — the figures stay correct.</span></div></div>'+
  '<div class="impopt" onclick="applyImport(\'append\')"><span class="ic">➕</span><div><b>Add to the stored responses</b><span>Keeps what is already there and appends this sheet. Rows identical to one already stored are skipped, so nothing is counted twice. Use this when a second batch of forms has come in.</span></div></div>'+
  '</div><button class="btn ghost mt" style="width:100%" onclick="closeModal();PENDIMPORT=null">Cancel</button>',true);}
function importRegistrations(){pickFile(rows=>importQuestionnaire('registration',rows,'registration'));}
function importFeedback(){pickFile(rows=>importQuestionnaire('feedback',rows,'feedback'));}
function importTestScores(){pickFile(rows=>{
 if(!rows.length){toast('The file is empty');return;}
 const hdr=(rows[0]||[]).map(c=>(''+c).trim().toLowerCase());
 const f=(re)=>hdr.findIndex(h=>re.test(h));
 const iC=(f(/^programme\s*code$/)>=0)?f(/^programme\s*code$/):f(/^programme$/);
 const iN=(f(/^participant$/)>=0)?f(/^participant$/):f(/^name$/);
 const iE=f(/^entry\s*score$/), iX=f(/^exit\s*score$/);
 let iM=f(/^maximum\s*marks$/); if(iM<0)iM=f(/^max(imum)?\s*mark/); if(iM<0)iM=f(/^total$/);
 const iT=f(/^type/), iS=f(/^score$/);
 if(iC<0||iN<0){toast('Row 1 must include "Programme Code" and "Participant" columns');return;}
 let add=0,upd=0,skip=0;
 function put(code,nm,type,val,total){
  const s=(''+(val==null?'':val)).trim(); if(s==='')return;
  const T=DB.responses[code].tests;
  const rec={name:nm,type:type,score:Math.max(0,+s||0),total:Math.max(1,+total||20)};
  if(rec.score>rec.total)rec.score=rec.total;
  const d=T.findIndex(x=>normName(x.name)===normName(nm)&&x.type===type);
  if(d>=0){T[d]=rec;upd++;}else{T.push(rec);add++;}}
 rows.slice(1).forEach(r=>{
  const code=(''+((r[iC]==null?'':r[iC])+'')).trim();
  const nm=(''+((r[iN]==null?'':r[iN])+'')).trim();
  if(!code||!nm||!prog(code)){skip++;return;}
  ensureProg(code);
  const mx=(iM>=0&&(''+(r[iM]==null?'':r[iM])).trim()!=='')?+r[iM]:20;
  if(iE>=0||iX>=0){ if(iE>=0)put(code,nm,'Entry',r[iE],mx); if(iX>=0)put(code,nm,'Exit',r[iX],mx); }
  else if(iT>=0&&iS>=0){ let ty=(''+(r[iT]||'')).trim().toLowerCase(); ty=ty.startsWith('ex')?'Exit':'Entry'; put(code,nm,ty,r[iS],mx); }
  else skip++;});
 save();toast('Scores: '+add+' added, '+upd+' updated'+(skip?' · '+skip+' row(s) skipped':'')+' ✓');render('assessment');});}
function progTemplate(){downloadTemplate([['Code','Name','Type of Programme','Sponsor Department','Target Group','PD','Co-PD','Mode','Start Date','End Date'],['TP2611','Agri Value Chain Finance','Sponsored','Farm Sector Development Department','RRBs; RCBs','Naveenkumar H S','Sagar H R L','In House','2027-01-07','2027-01-10']],'Programmes_Import_Template');}
function importProgrammes(){pickFile(rows=>{const {idx,body}=headerIndex(rows);const iC=idx('code'),iN=idx('name'),iT=idx('type of programme'),iD=idx('sponsor department'),iG=idx('target group'),iP=idx('pd'),iCo=idx('co-pd'),iM=idx('mode'),iS=rows[0].findIndex(c=>/start/i.test(''+c)),iE=rows[0].findIndex(c=>/end/i.test(''+c));let add=0,upd=0;body.forEach(r=>{const code=(''+(r[iC]||'')).trim(),name=(''+(r[iN]||'')).trim();if(!code||!name)return;const st=normDate(r[iS]),en=normDate(r[iE]);let pt=(''+(r[iT]||'')).trim();pt=pt.toLowerCase().startsWith('cust')?'Customised':'Sponsored';const tg=(iG>=0?(''+(r[iG]||'')).split(/[;,]/).map(s=>s.trim()).filter(Boolean):[]);tg.forEach(t=>tgAddMaster(t));const d={name,ptype:pt,sdept:iD>=0?(''+(r[iD]||'')).trim():'',tg,pd:(''+(r[iP]||'—')).trim(),copd:(''+(r[iCo]||'—')).trim(),mode:(''+(r[iM]||'In House')).trim(),start:st||'2027-01-01',end:en||'',days:+(daysBetween(st,en)||1)};const ex=prog(code);if(ex){Object.assign(ex,d);upd++;}else{DB.programmes.push({id:code,...d});DB.forms[code]={registration:stdRegForm(),entry:stdQuiz(),exit:stdQuiz(),feedback:stdFeedbackForm()};DB.responses[code]={registration:[],feedback:[],tests:[]};add++;}});save();toast('Programmes: '+add+' added, '+upd+' updated ✓');vProg();});}
function importBar(k){
 if(k==='prog')return '<div class="card" style="padding:14px 16px;border-left:4px solid var(--blue)"><div class="chart-title" style="margin-bottom:8px">📥 Import Programmes<span style="display:flex;gap:6px"><button class="btn sm sec" onclick="progTemplate()">⬇️ Template</button><button class="btn sm" onclick="importProgrammes()">📤 Upload File</button></span></div><p style="font-size:12.5px;color:var(--muted);margin:0">Migrate programmes (Code, Name, Type, Sponsor Department, Target Group, PD, Co-PD, Mode, dates).</p></div>';
 const M={reg:['📥 Import Registrations','regTemplate()','importRegistrations()',
              'Upload a sheet in which the <b>first row carries the questions</b> and the rows below carry the responses. If registrations are already stored you are asked whether to <b>replace</b> them or <b>add</b> to them, and rows identical to one already stored are skipped — so re-uploading the same sheet never doubles the figures.'],
          test:['📥 Import Entry / Exit Scores','testTemplate()','importTestScores()',
              'Upload a sheet with one row per participant carrying <b>Programme Code, Participant, Entry Score, Exit Score and Maximum Marks</b>. Existing scores are updated rather than duplicated, so the same sheet can be used to correct them.'],
          fb:['📥 Import Feedback','feedbackTemplate()','importFeedback()',
              'Upload a sheet in which the <b>first row carries the questions</b> and the rows below carry the responses. If feedback is already stored you are asked whether to <b>replace</b> it or <b>add</b> to it, and rows identical to one already stored are skipped — so re-uploading the same sheet never doubles the counts or the comment multipliers. Non-responses such as Nil, NA, No or None are left out of the summary and the report.']}[k];
 return '<div class="card" style="padding:14px 16px;border-left:4px solid var(--blue)">'+
  '<div class="chart-title" style="margin-bottom:8px">'+M[0]+
   '<span style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn sm sec" onclick="'+M[1]+'">⬇️ Sample Template</button><button class="btn sm" onclick="'+M[2]+'">📤 Upload File</button></span></div>'+
  '<p style="font-size:12.5px;color:var(--muted);margin:0;line-height:1.55">'+M[3]+'</p></div>';}
function fbBars(F,key,opts){const m=orderBy(countIn(F,key,opts),opts);const tot=Object.values(m).reduce((a,b)=>a+b,0);if(!tot)return '<div style="font-size:12px;color:var(--muted)">No responses</div>';const mx=Math.max(1,...Object.values(m));return Object.entries(m).map(([k,v])=>'<div class="bar" style="margin:5px 0"><div class="lb" style="width:105px;font-size:12px">'+k+'</div><div class="track" style="height:18px"><div class="fill" style="width:'+Math.max(6,v/mx*100)+'%;background:'+(RATE_COLORS[k]||'#66756c')+';font-size:11px">'+v+'</div></div><div style="width:42px;text-align:right;font-size:11.5px;color:var(--muted)">'+Math.round(v/tot*100)+'%</div></div>').join('');}
function fbComments(F,key,label){
 const list=commentList(F,key);
 const wrote=commentRespondents(F,key);
 const body=list.length
  ? '<div class="cmt">'+list.map((c,i)=>'<div class="it"><span class="nm">'+(i+1)+'.</span><span style="flex:1">'+esc(c.text)+'</span>'+(c.n>1?('<span class="rep">'+c.n+'×</span>'):'')+'</div>').join('')+'</div>'
  : '<div style="font-size:12px;color:var(--muted);padding:6px 2px">No comments were recorded for this question.</div>';
 return '<div class="fbq"><h4><span>'+esc(label)+'</span>'+(list.length?('<span class="tag g">'+list.length+' comment'+(list.length===1?'':'s')+'</span>'):'')+'</h4>'+
  (list.length?('<div style="font-size:11.5px;color:var(--muted);margin:-2px 0 7px">'+wrote+' of '+F.length+' participants responded · non-responses (Nil, NA, No, None, "-") excluded</div>'):'')+body+'</div>';}
function fbSummary(id){const F=(DB.responses[id].feedback||[]).map(r=>r.answers||{});if(!F.length)return '<div class="card"><div class="chart-title">⭐ Feedback Summary</div><div class="empty">No feedback responses yet.</div></div>';
 const q=(k,o,lbl)=>'<div class="fbq"><h4>'+(lbl||k)+'</h4>'+fbBars(F,k,o)+'</div>';
 const sess=FB_SESSIONS.filter(s=>F.some(x=>(x[s]||'').trim()));
 const dur=orderBy(countIn(F,'Comments on the duration of the programme: Whether Adequate?',YESNO),YESNO);
 const dt=Object.values(dur).reduce((a,b)=>a+b,0)||1;
 const cq=[[Q_INADQ,'Suggestions where a rating was Not Adequate'],[Q_ADD,'Additional topic(s) suggested'],
  [Q_EXC,'Existing topic(s) to be excluded'],[Q_NOTUSE,'If not useful, why?'],
  [Q_LEARN,'Important learning points'],[Q_ACTS,'Proposed action at the workplace'],
  [Q_BIMP,'Improvements suggested — Boarding'],[Q_LIMP,'Improvements suggested — Lodging'],
  [Q_OTHER,'Other suggestions']];
 const known=FB_RATE_Q.concat(FB_UTIL_Q,FB_SESSIONS,['Name','Comments on the duration of the programme: Whether Adequate?','Comments on Infrastructure facilities – Boarding','Comments on Infrastructure facilities - Lodging',Q_DAYS]).concat(cq.map(x=>x[0]));
 (DB.forms[id].feedback||[]).forEach(f=>{if(known.indexOf(f.label)<0&&(!f.options||!f.options.length)&&f.type!=='Participant')cq.push([f.label,f.label]);});
 const totalComments=cq.reduce((s,c)=>s+commentList(F,c[0]).length,0);
 const d=dupInfo(id,'feedback');
 return '<div class="card">'+dupBanner(id,'feedback','feedback')+
 '<div class="chart-title">⭐ Feedback Summary <span style="font-weight:400;color:var(--muted);font-size:12px">'+F.length+' response(s)'+(d.dup?(' <span class="tag a">'+d.dup+' duplicate(s) inflating these counts</span>'):'')+' · '+Math.round((dur['Yes']||0)/dt*100)+'% found the duration adequate</span></div>'+
 '<div class="fbgrid">'+FB_RATE_Q.map((k,i)=>q(k,RATE4,FB_RATE_SHORT[i])).join('')+'</div>'+
 '<div class="fbgrid mt">'+FB_UTIL_Q.map(k=>q(k,UTIL3)).join('')+q('Comments on the duration of the programme: Whether Adequate?',YESNO)+'</div>'+
 '<div class="fbgrid mt">'+q('Comments on Infrastructure facilities – Boarding',INFRA4)+q('Comments on Infrastructure facilities - Lodging',INFRA4)+'</div>'+
 (sess.length?'<div class="mt"><div class="chart-title" style="margin-bottom:8px">📚 Session-wise Evaluation</div><div class="sessgrid">'+sess.map(s=>q(s,RATE4)).join('')+'</div></div>':'')+
 '<div class="mt"><div class="chart-title" style="margin-bottom:8px">💬 Participant Comments <span style="font-weight:400;color:var(--muted);font-size:12px">'+totalComments+' comment(s) across '+cq.length+' open question(s) — every comment is listed in full</span></div>'+
 '<div class="fbgrid">'+cq.map(c=>fbComments(F,c[0],c[1])).join('')+'</div></div></div>';}
function perStatusCard(id){const st=perReady(id);
 if(!st.ok)return '<div class="perbox"><div style="font-weight:700;color:var(--green-d);font-size:13.5px">📄 Programme Evaluation Report</div><div style="font-size:12.5px;color:var(--muted);margin-top:6px">The report becomes available once all three data sets are collected — <b>Registration ('+st.reg+')</b>, <b>Entry/Exit test ('+st.tests+')</b> and <b>Feedback ('+st.fb+')</b>.</div></div>';
 return '<div class="perbox"><div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap"><div><div style="font-weight:700;color:var(--green-d);font-size:13.5px">📄 Programme Evaluation Report</div><div style="font-size:12.5px;color:var(--muted);margin-top:4px">Compiled from '+st.reg+' registrations · '+st.tests+' test scores · '+st.fb+' feedback responses</div></div><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn sm sec" onclick="previewPER(\''+id+'\')">👁️ Preview</button><button class="btn sm" onclick="downloadPER(\''+id+'\')">⬇️ Download Word</button></div></div></div>';}
function vProg(){if(SEL.programmes)return progDetail(SEL.programmes);const ce=ROLE==='Admin';const fy=currentFY();let l=sortByDate(applyFilters('programmes',progsInFY(fy)),PSORT.programmes);const f=PFILT.programmes;
 $('#view').innerHTML='<div class="page-h"><div><h2>Programme Management</h2><p>Click a programme to view its data · filter by mode, type, department or target group</p></div><div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">'+fySelector('programmes')+(ce?'<button class="btn sec" onclick="viewArchive()">🗄️ Archived ('+DB.archive.length+')</button><button class="btn" onclick="progForm()">+ New Programme</button>':'')+'</div></div>'+(ce?importBar('prog'):'')+filterBar('programmes')+
 '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin:0 2px 12px"><p style="color:var(--muted);font-size:13px;margin:0">Showing <b>'+l.length+'</b> programme(s) in FY '+fy+(f.tg&&f.tg!=='All'?(' · target group <b>'+f.tg+'</b>'):'')+'.</p>'+sortControl('programmes')+'</div>'+
 (l.length?'<div class="progcards">'+l.map((p,i)=>{const c=['','p','o','b'][i%4];const r=DB.responses[p.id];const g=gainRatio(p.id);return '<div class="progcard '+c+'"><div onclick="openWS(\'programmes\',\''+p.id+'\',\'\')" style="cursor:pointer"><h3>'+p.name+'</h3><div class="meta"><span class="pill">'+p.id+'</span> · '+p.mode+' · <b>FY '+fyOf(p.start)+'</b><br><b>Type:</b> '+pType(p)+(pDept(p)?'<br><b>Sponsor Dept:</b> '+pDept(p):'')+'<br><b>PD:</b> '+p.pd+'<br><b>Co-PD:</b> '+p.copd+'<br><b>Dates:</b> '+fmtDate(p.start)+' → '+fmtDate(endOf(p))+'<br><b>Gain Ratio:</b> '+(g.ok?'<b style="color:var(--green-d)">'+(g.gr*100).toFixed(2)+'%</b>':'—')+'</div><div style="margin-top:8px"><div style="font-size:11.5px;color:var(--muted);font-weight:700;margin-bottom:3px">🎯 TARGET GROUP</div>'+tgChips(pTG(p),4)+'</div><div class="cnt"><div><b>'+r.registration.length+'</b>Registered</div><div><b>'+r.feedback.length+'</b>Feedback</div><div><b>'+r.tests.length+'</b>Tests</div></div></div>'+(ce?'<div style="display:flex;gap:6px;margin-top:12px;border-top:1px solid var(--line);padding-top:10px"><button class="btn sm sec" style="flex:1" onclick="event.stopPropagation();progForm(\''+p.id+'\')">✏️ Edit</button><button class="btn sm danger" onclick="event.stopPropagation();confirmDeleteProg(\''+p.id+'\')">🗑️</button></div>':'')+'</div>';}).join('')+'</div>':'<div class="card"><div class="empty">No programmes match the current filters.</div></div>');restoreSearchFocus('programmes');}
function confirmDeleteProg(id){const p=prog(id);if(!p)return;openModal('<button class="x" onclick="closeModal()">✕</button><h3>🗑️ Delete Programme</h3><p style="margin-top:8px">Delete <b>'+p.name+'</b>?</p><div class="row" style="margin-top:14px"><button class="btn ghost" style="flex:1" onclick="closeModal()">Cancel</button><button class="btn danger" style="flex:1" onclick="archiveProg(\''+id+'\')">Delete &amp; Archive</button></div>');}
function archiveProg(id){const i=DB.programmes.findIndex(x=>x.id===id);if(i<0)return;DB.archive.push({programme:DB.programmes[i],forms:DB.forms[id]||{},responses:DB.responses[id]||{},deletedAt:new Date().toISOString().slice(0,10)});DB.programmes.splice(i,1);delete DB.forms[id];delete DB.responses[id];save();closeModal();toast('Moved to archive 🗄️');vProg();}
function viewArchive(){const rows=DB.archive;openModal('<button class="x" onclick="closeModal()">✕</button><h3>🗄️ Archived Programmes ('+rows.length+')</h3><div class="mt">'+(rows.length?'<div style="overflow:auto"><table><thead><tr><th>Code</th><th>Programme</th><th></th></tr></thead><tbody>'+rows.map((a,i)=>'<tr><td><span class="pill">'+a.programme.id+'</span></td><td><b>'+a.programme.name+'</b></td><td><button class="btn sm sec" onclick="restoreProg('+i+')">↩ Restore</button></td></tr>').join('')+'</tbody></table></div>':'<div class="empty">No archived programmes.</div>')+'</div>');}
function restoreProg(i){const a=DB.archive[i];if(!a)return;let id=a.programme.id;if(prog(id)){let n=2;while(prog(id+'-R'+n))n++;id=id+'-R'+n;a.programme.id=id;}DB.programmes.push(a.programme);DB.forms[id]=(a.forms&&Object.keys(a.forms).length)?a.forms:{registration:stdRegForm(),entry:[],exit:[],feedback:stdFeedbackForm()};DB.responses[id]=a.responses||{registration:[],feedback:[],tests:[]};DB.archive.splice(i,1);save();closeModal();toast('Restored ✓');vProg();}
function progRegTable(id){const rc=DB.forms[id].registration.map(f=>f.label);const rows=DB.responses[id].registration;
 const key='programmes|reg|'+id;const st=tsGet(key);
 let data=rows.map(x=>x.answers||{});
 if(st)data=sortRows(data,st.col,st.dir,(r,c)=>r[rc[c]]);
 return (rows.length?'<div class="tblwrap5"><table><thead><tr>'+rc.map((c,i)=>sortableTH(key,i,esc(c))).join('')+'</tr></thead><tbody>'+
  data.map(a=>{const b=isBlacklisted(aName(a),aMobile(a));return '<tr class="'+(b?'blkrow':'')+'">'+rc.map(c=>'<td>'+(c==='Name'&&b?'⛔ ':'')+((a[c]==null||a[c]==='')?'—':esc(a[c]))+'</td>').join('')+'</tr>';}).join('')+'</tbody></table></div>':'<div class="empty">No registrations yet.</div>');}
function progDetail(id){const p=prog(id),r=DB.responses[id];const t=r.tests,en=t.filter(x=>x.type==='Entry'),ex=t.filter(x=>x.type==='Exit');const ae=en.length?(en.reduce((a,b)=>a+b.score,0)/en.length).toFixed(1):'—';const ax=ex.length?(ex.reduce((a,b)=>a+b.score,0)/ex.length).toFixed(1):'—';const g=gainRatio(id);
 const blk=r.registration.filter(x=>isBlacklisted(aName(x.answers),aMobile(x.answers))).length;
 const pe=pendingCount(id,'Entry'),px=pendingCount(id,'Exit'),pf=pendingCount(id,'Feedback');
 const tkey='programmes|tests|'+id;const tst=tsGet(tkey);
 let tr=testsByName(id).map(x=>({name:x.name,e:x.entry?x.entry.score:'',et:x.entry?x.entry.total:'',x:x.exit?x.exit.score:'',xt:x.exit?x.exit.total:'',g:(x.entry&&x.exit)?(x.exit.score-x.entry.score):''}));
 if(tst)tr=sortRows(tr,tst.col,tst.dir,(r,c)=>[r.name,r.e,r.x,r.g][c]);
 $('#view').innerHTML='<button class="backbtn" onclick="backTo(\'programmes\')">← All Programmes</button><div class="page-h"><div><h2>'+p.name+'</h2><p><span class="pill">'+p.id+'</span> · '+pType(p)+(pDept(p)?' ('+pDept(p)+')':'')+' · FY '+fyOf(p.start)+' · '+p.mode+' · PD '+p.pd+' / Co-PD '+p.copd+' · '+fmtDate(p.start)+' → '+fmtDate(endOf(p))+' · '+p.days+' days</p><div style="margin-top:6px"><span style="font-size:11.5px;color:var(--muted);font-weight:700;margin-right:6px">🎯 TARGET GROUP:</span>'+tgChips(pTG(p))+'</div></div>'+(ROLE==='Admin'?'<div style="display:flex;gap:8px"><button class="btn sec" onclick="progForm(\''+p.id+'\')">✏️ Edit Details</button></div>':'')+'</div>'+
 dupBanner(id,'registration','programmes')+dupBanner(id,'feedback','programmes')+
 '<div class="kpis"><div class="kpi"><div class="n">'+r.registration.length+'</div><div class="l">Registrations</div></div><div class="kpi b"><div class="n">'+r.feedback.length+'</div><div class="l">Feedback Responses</div></div><div class="kpi p"><div class="n">'+ae+'</div><div class="l">Avg Entry Score</div></div><div class="kpi o"><div class="n">'+ax+'</div><div class="l">Avg Exit Score</div></div>'+
 ((pe+px+pf)?('<div class="kpi a"><div class="n">'+(pe+px+pf)+'</div><div class="l">⏳ Submissions awaited<br><span style="font-size:10px">'+pe+' entry · '+px+' exit · '+pf+' feedback</span></div></div>'):'<div class="kpi"><div class="n">✓</div><div class="l">All submissions received</div></div>')+'</div>'+
 perStatusCard(id)+grCard(id)+
 '<div class="card"><div class="chart-title">🔗 QR Codes for Data Collection</div><div class="row"><button class="btn sec" onclick="qr(\''+id+'\',\'registration\')">📝 Registration QR</button><button class="btn sec" onclick="qr(\''+id+'\',\'entry\')">🧪 Entry Test QR</button><button class="btn sec" onclick="qr(\''+id+'\',\'exit\')">🧪 Exit Test QR</button><button class="btn sec" onclick="qr(\''+id+'\',\'feedback\')">⭐ Feedback QR</button></div></div>'+
 '<div class="card"><div class="chart-title">📝 Registration Details ('+r.registration.length+')'+(blk?' <span class="tag r">⛔ '+blk+' blacklisted</span>':'')+'<span class="sortnote">Click any column heading to sort</span></div>'+progRegTable(id)+'</div>'+
 '<div class="card"><div class="chart-title">🧪 Entry / Exit Test Details'+(g.ok?' <span style="font-weight:400;color:var(--muted);font-size:12px">Gain Ratio <b style="color:var(--green-d)">'+(g.gr*100).toFixed(2)+'%</b></span>':'')+'<span style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><button class="btn sm warn" onclick="submissionStatusModal(\''+id+'\',\'test\')">🔔 Submission Status'+((pe+px)?(' ('+(pe+px)+')'):'')+'</button><span class="sortnote">Click a heading to sort</span></span></div>'+
 (tr.length?'<div class="tblwrap5"><table><thead><tr>'+sortableTH(tkey,0,'Participant')+sortableTH(tkey,1,'Entry','style="text-align:center"')+sortableTH(tkey,2,'Exit','style="text-align:center"')+sortableTH(tkey,3,'Gain','style="text-align:center"')+'</tr></thead><tbody>'+tr.map(x=>{const e1=(x.e!=='')?(x.e+'/'+x.et):'—';const e2=(x.x!=='')?(x.x+'/'+x.xt):'—';const gg=x.g;return '<tr><td><b>'+esc(x.name)+'</b></td><td style="text-align:center"><span class="tag b">'+e1+'</span></td><td style="text-align:center"><span class="tag g">'+e2+'</span></td><td style="text-align:center">'+(gg===''?'—':(gg>0?'<span class="tag g">▲ +'+gg+'</span>':'<span class="tag o">'+gg+'</span>'))+'</td></tr>';}).join('')+'</tbody></table></div>':'<div class="empty">No test scores yet.</div>')+'</div>'+fbSummary(id);}
function recalcDays(){const s=$('#f_start').value,e=$('#f_end').value;const d=daysBetween(s,e);const b=$('#f_days');if(b)b.value=d===''?'':d;}
function pnameOptions(pt,d,cur){const n=proposedNamesFor(pt,d);let h='<option value="">— Select programme name —</option>';n.forEach(x=>{h+='<option '+(cur===x?'selected':'')+'>'+x+'</option>';});if(cur&&n.indexOf(cur)<0)h+='<option selected>'+cur+'</option>';return h;}
function facOptions(cur){const n=facultyNames();let h='<option value="">— Select faculty member —</option>';n.forEach(x=>{h+='<option '+(cur===x?'selected':'')+'>'+x+'</option>';});if(cur&&cur!=='—'&&n.indexOf(cur)<0)h+='<option selected>'+cur+'</option>';return h;}
function refreshPName(){const pt=$('#f_ptype').value;const ds=$('#f_sdept');const d=ds?ds.value:'';const cur=$('#f_name')?$('#f_name').value:'';const box=$('#f_name_wrap');if(!box)return;const cu=(pt==='Customised');if(ds)ds.disabled=cu;const n=proposedNamesFor(pt,d);const keep=(n.indexOf(cur)>=0)?cur:'';box.innerHTML='<select id="f_name" onchange="onPNameChange()">'+pnameOptions(pt,d,keep)+'</select>'+(n.length?'':'<div style="font-size:11px;color:#c0392b;margin-top:4px">No proposed programmes found. Add them in Claims Data → Proposed Programmes.</div>');onPNameChange();}
function onPNameChange(){const pt=$('#f_ptype').value;const ds=$('#f_sdept');const d=ds?ds.value:'';const nm=$('#f_name')?$('#f_name').value:'';const h=$('#f_dayhint');const dd=nm?proposedDaysFor(pt,d,nm):0;if(h)h.textContent=dd?('Planned duration: '+dd+' day(s)'):'';
 const tgb=$('#f_tg_wrap');if(tgb){const tg=nm?proposedTGFor(pt,d,nm):[];
  tgb.innerHTML=nm?(tg.length?('<div style="padding:9px 12px;border:1px solid var(--line);border-radius:10px;background:var(--surface-2)">'+tgChips(tg)+'</div><div style="font-size:11px;color:var(--muted);margin-top:4px">Linked from the Proposed Programmes entry — edit it there to change.</div>'):'<div style="font-size:11.5px;color:#c0392b;padding:9px 12px;border:1px dashed var(--line);border-radius:10px">No target group set. Add it in Claims Data → Proposed Programmes.</div>'):'<div style="font-size:11.5px;color:var(--muted);padding:9px 12px;border:1px dashed var(--line);border-radius:10px">Select a programme name to see its target group.</div>';}}
function progForm(eid){const ed=!!eid;const p=ed?prog(eid):{id:'',name:'',ptype:'Sponsored',sdept:'',tg:[],pd:'',copd:'',mode:'In House',start:'',days:''};const modes=['In House','Online','On Location'];const cd=ed?(daysBetween(p.start,endOf(p))||p.days||''):'';const cur=pType(p);const deps=usedDepts();const cdp=pDept(p);const cu=(cur==='Customised');
 openModal('<button class="x" onclick="closeModal()">✕</button><h3>'+(ed?'Edit Programme':'New Programme')+'</h3>'+
 '<div class="mt"><label>Programme Code</label><input id="f_code" value="'+esc(p.id)+'" placeholder="e.g. TP2611"></div>'+
 '<div class="row mt"><div class="col"><label>Type of Programme</label><select id="f_ptype" onchange="refreshPName()">'+PROG_TYPES.map(t=>'<option '+(cur===t?'selected':'')+'>'+t+'</option>').join('')+'</select></div><div class="col"><label>Sponsor Department</label><select id="f_sdept" onchange="refreshPName()" '+(cu?'disabled':'')+'><option value="">— Select department —</option>'+deps.map(d=>'<option '+(cdp===d?'selected':'')+'>'+d+'</option>').join('')+'</select></div></div>'+
 '<div class="mt"><label>Programme Name <span style="font-weight:400;color:var(--muted)">(from Claims Data → Proposed Programmes)</span></label><div id="f_name_wrap"><select id="f_name" onchange="onPNameChange()">'+pnameOptions(cur,cdp,p.name||'')+'</select></div><div id="f_dayhint" style="font-size:11px;color:var(--muted);margin-top:4px"></div></div>'+
 '<div class="mt"><label>🎯 Target Group <span style="font-weight:400;color:var(--muted)">(linked to the selected programme)</span></label><div id="f_tg_wrap"></div></div>'+
 '<div class="row mt"><div class="col"><label>PD <span style="font-weight:400;color:var(--muted)">(from Faculty Members)</span></label><select id="f_pd">'+facOptions(p.pd||'')+'</select></div><div class="col"><label>Co-PD <span style="font-weight:400;color:var(--muted)">(from Faculty Members)</span></label><select id="f_copd">'+facOptions(p.copd||'')+'</select></div></div>'+
 '<div class="row mt"><div class="col"><label>Start Date</label><input id="f_start" type="date" value="'+(p.start||'')+'" onchange="recalcDays()"></div><div class="col"><label>End Date</label><input id="f_end" type="date" value="'+(ed?endOf(p):'')+'" onchange="recalcDays()"></div></div>'+
 '<div class="row mt"><div class="col"><label>Mode</label><select id="f_mode">'+modes.map(m=>'<option '+(p.mode===m?'selected':'')+'>'+m+'</option>').join('')+'</select></div><div class="col"><label>No. of Days <span style="font-weight:400;color:var(--muted)">(auto)</span></label><input id="f_days" type="number" value="'+cd+'" readonly style="background:var(--bg)"></div></div>'+
 '<button class="btn mt" style="width:100%" onclick="saveProg(\''+(ed?p.id:'')+'\')">'+(ed?'Save Changes':'Create Programme')+'</button>');onPNameChange();}
function saveProg(eid){const nm=($('#f_name')?$('#f_name').value:'').trim();if(!nm){toast('Please select a Programme Name');return}const code=$('#f_code').value.trim();if(!code){toast('Enter a programme code');return}const pt=$('#f_ptype').value;const sd=(pt==='Customised')?'':($('#f_sdept')?$('#f_sdept').value.trim():'');const tg=proposedTGFor(pt,sd,nm);const st=$('#f_start').value||'2027-01-01',en=$('#f_end').value||'';const dy=daysBetween(st,en)||(eid?prog(eid).days:'')||1;const d={name:nm,ptype:pt,sdept:sd,tg,pd:($('#f_pd').value||'—'),copd:($('#f_copd').value||'—'),mode:$('#f_mode').value,start:st,end:en,days:+dy};if(DB.programmes.find(x=>x.id===code&&x.id!==eid)){toast('Code exists');return}
 if(eid){const p=prog(eid);Object.assign(p,d);if(code!==eid){p.id=code;DB.forms[code]=DB.forms[eid];delete DB.forms[eid];DB.responses[code]=DB.responses[eid];delete DB.responses[eid];}save();closeModal();toast('Programme updated ✓');vProg();}
 else{DB.programmes.push({id:code,...d});DB.forms[code]={registration:stdRegForm(),entry:stdQuiz(),exit:stdQuiz(),feedback:stdFeedbackForm()};DB.responses[code]={registration:[],feedback:[],tests:[]};save();closeModal();toast('Programme created ✓');vProg();}}
function qr(id,ft){const link='https://bird-m.training/'+ft+'?prog='+id;const n={registration:'Registration',entry:'Entry Test',exit:'Exit Test',feedback:'Feedback'};openModal('<button class="x" onclick="closeModal()">✕</button><h3>'+n[ft]+' QR — '+id+'</h3><p style="color:var(--muted);font-size:13px">Participants scan this to open the '+n[ft]+' form.</p><div id="qrbox" class="mt"></div><div class="mt" style="font-size:12px;color:var(--muted);word-break:break-all">🔗 '+link+'</div>');const b=$('#qrbox');if(window.QRCode&&!window.__noQR){new QRCode(b,{text:link,width:180,height:180,colorDark:'#1f7a3f'});}else{b.innerHTML='<div style="width:180px;height:180px;background:var(--green-l);border-radius:12px;display:flex;align-items:center;justify-content:center;text-align:center;padding:14px;color:var(--green-d);font-size:13px">QR needs internet.<br>Share the link below.</div>';}}
function progListPage(pg,title,sub){const fy=currentFY();const l=sortByDate(applyFilters(pg,progsInFY(fy)),PSORT[pg]);
 const kind=(pg==='feedback')?'feedback':'registration';const t=dupTotals(kind);
 const allWarn=t.rows?('<div class="notice amber" style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap"><span>⚠️ <b>'+t.rows+'</b> duplicate '+kind+' row(s) found across <b>'+t.progs+'</b> programme(s) — these double the counts shown on the charts.</span><button class="btn sm warn" onclick="dupCleanAll(\''+kind+'\')">🧹 Review &amp; remove</button></div>'):'';
 $('#view').innerHTML='<div class="page-h"><div><h2>'+title+'</h2><p>'+sub+'</p></div>'+fySelector(pg)+'</div>'+allWarn+importBar(pg==='feedback'?'fb':'reg')+filterBar(pg)+'<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin:0 2px 12px"><p style="color:var(--muted);font-size:13px;margin:0">Showing <b>'+l.length+'</b> programme(s) in FY '+fy+'.</p>'+sortControl(pg)+'</div>'+
 (l.length?'<div class="progcards">'+l.map((p,i)=>{const c=['','p','o','b'][i%4];const r=DB.responses[p.id];const cnt=pg==='feedback'?r.feedback.length:r.registration.length;
  const pend=(pg==='feedback')?pendingCount(p.id,'Feedback'):0;const d=dupInfo(p.id,kind);
  return '<div class="progcard '+c+'" onclick="openWS(\''+pg+'\',\''+p.id+'\',\''+(pg==='feedback'?'Summary':'Form Builder')+'\')" style="cursor:pointer"><h3>'+p.name+'</h3><div class="meta"><span class="pill">'+p.id+'</span> · '+p.mode+' · '+pType(p)+'<br>'+fmtDate(p.start)+' → '+fmtDate(endOf(p))+' · '+p.days+' days</div><div style="margin-top:6px">'+tgChips(pTG(p),3)+'</div>'+
  '<div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">'+
   ((pg==='feedback')?(pend?('<span class="tag a">⏳ '+pend+' feedback pending</span>'):'<span class="tag g">✓ All feedback received</span>'):'')+
   (d.dup?('<span class="tag a">⚠️ '+d.dup+' duplicate(s)</span>'):'')+'</div>'+
  '<div class="cnt"><div><b>'+DB.forms[p.id][pg==='feedback'?'feedback':'registration'].length+'</b>Questions</div><div><b>'+cnt+'</b>'+(pg==='feedback'?'Feedback':'Registered')+'</div></div></div>';}).join('')+'</div>':'<div class="card"><div class="empty">No programmes match.</div></div>');restoreSearchFocus(pg);}
function wsHeader(pg,id,tabs){const p=prog(id);return '<button class="backbtn" onclick="backTo(\''+pg+'\')">← All Programmes</button><div class="page-h"><div><h2>'+p.name+'</h2><p><span class="pill">'+p.id+'</span> · '+pType(p)+(pDept(p)?' ('+pDept(p)+')':'')+' · '+p.mode+' · '+fmtDate(p.start)+' → '+fmtDate(endOf(p))+'</p><div style="margin-top:5px">'+tgChips(pTG(p))+'</div></div></div><div class="subnav">'+tabs.map(t=>'<button class="'+(SUB===t?'active':'')+'" onclick="setSub(\''+pg+'\',\''+t+'\')">'+t+'</button>').join('')+'</div>';}
const TYPES=['Short text','Paragraph','Dropdown','SearchDropdown','Number','Rating'];
function fieldBuilder(pg,id,ft){const form=DB.forms[id][ft];
 const tplFn=(ft==='registration')?('regTemplate(\''+id+'\')'):('feedbackTemplate(\''+id+'\')');
 return '<div class="card"><div class="chart-title">🧩 Form Builder ('+form.length+' questions)<span style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn sm sec" onclick="'+tplFn+'">⬇️ This form as template</button>'+(ft==='feedback'?'<button class="btn sm sec" onclick="resetFbForm(\''+id+'\')">↻ Reset to standard questionnaire</button>':'')+'<button class="btn sm" onclick="fieldModal(\''+pg+'\',\''+id+'\',\''+ft+'\',-1)">+ Add Question</button></span></div>'+(form.length?form.map((f,i)=>{
 if(f.type==='Participant')return '<div class="fieldrow sys"><div><div class="fq">'+(i+1)+'. '+f.label+' <span class="req">*</span></div><div class="fmeta"><span class="qtype">Participant</span> · 🔒 Auto-filled from Registration</div></div><span class="tag g">🔒 System field</span></div>';
 const up=(i===0||(form[i-1]&&form[i-1].type==='Participant')),dn=(i===form.length-1);
 return '<div class="fieldrow"><div style="display:flex;gap:8px;align-items:flex-start"><div style="display:flex;flex-direction:column;gap:2px"><button class="btn sm ghost" style="padding:2px 8px'+(up?';opacity:.3':'')+'" '+(up?'disabled':'')+' onclick="moveField(\''+pg+'\',\''+id+'\',\''+ft+'\','+i+',-1)">▲</button><button class="btn sm ghost" style="padding:2px 8px'+(dn?';opacity:.3':'')+'" '+(dn?'disabled':'')+' onclick="moveField(\''+pg+'\',\''+id+'\',\''+ft+'\','+i+',1)">▼</button></div><div><div class="fq">'+(i+1)+'. '+f.label+' '+(f.required?'<span class="req">*</span>':'')+'</div><div class="fmeta"><span class="qtype">'+f.type+'</span>'+((f.options&&f.options.length)?' · '+f.options.join(', '):'')+'</div></div></div><div style="display:flex;gap:6px;flex-shrink:0"><button class="btn sm sec" onclick="fieldModal(\''+pg+'\',\''+id+'\',\''+ft+'\','+i+')">Edit</button><button class="btn sm danger" onclick="delField(\''+pg+'\',\''+id+'\',\''+ft+'\','+i+')">Delete</button></div></div>';}).join(''):'<div class="empty">No questions yet — upload a sheet to set the questionnaire.</div>')+'</div>';}
function resetFbForm(id){openModal('<button class="x" onclick="closeModal()">✕</button><h3>↻ Reset feedback form</h3><p style="margin-top:8px">Replace with the standard BIRD questionnaire (33 questions)?</p><div class="row" style="margin-top:14px"><button class="btn ghost" style="flex:1" onclick="closeModal()">Cancel</button><button class="btn" style="flex:1" onclick="doResetFb(\''+id+'\')">Reset form</button></div>');}
function doResetFb(id){DB.forms[id].feedback=stdFeedbackForm();save();closeModal();toast('Feedback form reset ✓');render('feedback');}
function fieldModal(pg,id,ft,idx){const ed=idx>=0;const f=ed?DB.forms[id][ft][idx]:{label:'',type:'Short text',options:[],required:false};if(ed&&f.type==='Participant'){toast('Auto-managed field');return;}const so=(f.type==='Dropdown'||f.type==='SearchDropdown');openModal('<button class="x" onclick="closeModal()">✕</button><h3>'+(ed?'Edit Question':'Add Question')+'</h3><div class="mt"><label>Question / Field label</label><input id="af_label" value="'+esc(f.label)+'"></div><div class="mt"><label>Answer type</label><select id="af_type" onchange="document.getElementById(\'af_optsWrap\').style.display=(this.value===\'Dropdown\'||this.value===\'SearchDropdown\')?\'block\':\'none\'">'+TYPES.map(t=>'<option '+(t===f.type?'selected':'')+'>'+t+'</option>').join('')+'</select></div><div class="mt" id="af_optsWrap" style="display:'+(so?'block':'none')+'"><label>Dropdown options (one per line)</label><textarea id="af_opts" rows="4">'+(f.options||[]).join('\n')+'</textarea></div><div class="mt"><label><input type="checkbox" id="af_req" style="width:auto;margin-right:6px" '+(f.required?'checked':'')+'>Required field</label></div><button class="btn mt" style="width:100%" onclick="saveField(\''+pg+'\',\''+id+'\',\''+ft+'\','+idx+')">'+(ed?'Save Changes':'Add to Form')+'</button>');}
function saveField(pg,id,ft,idx){const l=$('#af_label').value.trim();if(!l){toast('Enter a label');return}const t=$('#af_type').value;const o=(t==='Dropdown'||t==='SearchDropdown')?$('#af_opts').value.split('\n').map(s=>s.trim()).filter(Boolean):[];const fd={label:l,type:t,options:o,required:$('#af_req').checked};if(idx>=0)DB.forms[id][ft][idx]=fd;else DB.forms[id][ft].push(fd);save();closeModal();toast('Saved ✓');render(pg);}
function delField(pg,id,ft,i){const f=DB.forms[id][ft][i];if(f&&f.type==='Participant'){toast('Cannot delete');return;}DB.forms[id][ft].splice(i,1);save();toast('Deleted');render(pg)}
function moveField(pg,id,ft,i,d){const a=DB.forms[id][ft];const j=i+d;if(j<0||j>=a.length)return;if(a[i].type==='Participant'||a[j].type==='Participant')return;[a[i],a[j]]=[a[j],a[i]];save();render(pg);}
function formPreview(pg,id,ft){const form=DB.forms[id][ft];if(!form.length)return '<div class="card"><div class="empty">Add questions first, or upload a sheet.</div></div>';return '<div class="card"><div class="chart-title">✍️ Fill / Preview form ('+form.length+' questions)</div>'+form.map((f,i)=>'<div class="ff"><label>'+f.label+' '+(f.required?'<span class="req">*</span>':'')+'</label>'+inputFor(f,i,'',id)+'</div>').join('')+'<button class="btn" style="width:100%" onclick="submitForm(\''+pg+'\',\''+id+'\',\''+ft+'\')">Submit Response</button></div>';}
function inputFor(f,i,val,pid){val=val==null?'':val;const id='ff_'+i;const e=esc(val);
 if(f.type==='Participant'){const n=registeredNames(pid);if(!n.length)return '<input id="'+id+'" value="'+e+'" placeholder="No registered participants yet">';return '<select id="'+id+'"><option value="">— Select participant —</option>'+n.map(x=>'<option '+((''+val)===x?'selected':'')+'>'+x+'</option>').join('')+'</select>';}
 if(f.type==='SearchDropdown'){const o=(f.options&&f.options.length?f.options:(window.ORG_NAMES||[]));return '<input id="'+id+'" list="dl_'+id+'" value="'+e+'" autocomplete="off"><datalist id="dl_'+id+'">'+o.map(x=>'<option value="'+esc(x)+'"></option>').join('')+'</datalist>';}
 if(f.type==='Dropdown')return '<select id="'+id+'"><option value="">— Select —</option>'+f.options.map(o=>'<option '+((''+val)===(''+o)?'selected':'')+'>'+o+'</option>').join('')+'</select>';
 if(f.type==='Paragraph')return '<textarea id="'+id+'" rows="2">'+esc(val)+'</textarea>';
 if(f.type==='Number')return '<input id="'+id+'" type="number" value="'+e+'">';
 if(f.type==='Rating')return '<select id="'+id+'"><option value="">Rate…</option>'+[5,4,3,2,1].map(n=>'<option value="'+n+'" '+((''+val)===(''+n)?'selected':'')+'>'+'★'.repeat(n)+' ('+n+')</option>').join('')+'</select>';
 return '<input id="'+id+'" value="'+e+'">';}
function submitForm(pg,id,ft){const form=DB.forms[id][ft];const a={};let miss=false;form.forEach((f,i)=>{const v=$('#ff_'+i).value;if(f.required&&!v)miss=true;a[f.label]=v});if(miss){toast('Please fill required (*) fields');return}
 const labels=form.map(f=>f.label);const store=DB.responses[id][ft];
 const k=respFingerprint(a,labels);
 if(store.some(r=>respFingerprint(r.answers,labels)===k)){toast('An identical response is already recorded — not added again');return;}
 store.push({answers:a,at:new Date().toISOString().slice(0,10)});save();
 if(ft==='feedback'){const left=pendingCount(id,'Feedback');toast('Response recorded ✓'+(left?(' · '+left+' participant(s) still to submit'):' · everyone has now submitted 🎉'));}
 else toast('Response recorded ✓');
 setSub(pg,'Responses');}
function responsesView(pg,id,ft){const form=DB.forms[id][ft];const rows=DB.responses[id][ft];const cols=form.map(f=>f.label);
 const key=pg+'|resp|'+id+'|'+ft;const st=tsGet(key);
 const labels=cols;const seenFp=new Set();const dupIdx=new Set();
 rows.forEach((r,i)=>{const k=respFingerprint(r.answers,labels);if(seenFp.has(k))dupIdx.add(i);else seenFp.add(k);});
 let data=rows.map((r,i)=>({a:r.answers||{},i:i,dup:dupIdx.has(i)}));
 if(st)data=sortRows(data,st.col,st.dir,(r,c)=>r.a[cols[c]]);
 const clr=st?('<button class="btn sm ghost" onclick="applySort(\''+key+'\',0,null)">✕ Clear sort</button>'):'';
 const isFb=(ft==='feedback');
 const pend=isFb?pendingCount(id,'Feedback'):0;
 const ssBtn=isFb?('<button class="btn sm warn" onclick="submissionStatusModal(\''+id+'\',\'feedback\')">🔔 Submission Status'+(pend?(' ('+pend+')'):'')+'</button>'):'';
 const strip=isFb?('<div class="notice'+(pend?' amber':'')+'" style="margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap"><span>'+(pend?('⏳ <b>'+pend+'</b> registered participant(s) have not submitted their feedback yet.'):'✅ Every registered participant has submitted their feedback.')+'</span>'+ssStrip(id,['Feedback'])+'</div>'):'';
 return '<div class="card">'+dupBanner(id,ft,pg)+strip+'<div class="chart-title">📋 Collected Responses ('+rows.length+(dupIdx.size?(' · '+dupIdx.size+' duplicate row(s) highlighted'):'')+')<span style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">'+ssBtn+'<span class="sortnote">Click any column heading to sort · scroll sideways for all '+cols.length+' questions</span>'+clr+'</span></div>'+
 (rows.length?'<div style="overflow:auto;max-height:520px"><table><thead><tr><th style="position:sticky;left:0;background:var(--card)">#</th>'+
  cols.map((c,i)=>sortableTH(key,i,esc(c),'style="min-width:150px"')).join('')+'<th></th></tr></thead><tbody>'+
  data.map((o,n)=>{const r=o.a;const b=isBlacklisted(aName(r),aMobile(r));return '<tr class="'+(o.dup?'duprow':(b?'blkrow':''))+'"><td style="position:sticky;left:0;background:var(--card)">'+(n+1)+(o.dup?' <span class="tag a">dup</span>':'')+'</td>'+cols.map(c=>'<td>'+((r[c]==null||r[c]==='')?'—':esc(r[c]))+'</td>').join('')+'<td style="white-space:nowrap;display:flex;gap:6px"><button class="btn sm sec" onclick="editResp(\''+pg+'\',\''+id+'\',\''+ft+'\','+o.i+')">✏️</button><button class="btn sm danger" onclick="delResp(\''+pg+'\',\''+id+'\',\''+ft+'\','+o.i+')">🗑️</button></td></tr>';}).join('')+'</tbody></table></div>':'<div class="empty">No responses yet.</div>')+'</div>';}
function editResp(pg,id,ft,ri){const form=DB.forms[id][ft];const r=DB.responses[id][ft][ri];if(!r)return;openModal('<button class="x" onclick="closeModal()">✕</button><h3>✏️ Edit Response</h3><div class="mt" style="max-height:60vh;overflow:auto">'+form.map((f,i)=>'<div class="ff"><label>'+f.label+'</label>'+inputFor(f,i,r.answers[f.label],id)+'</div>').join('')+'</div><button class="btn mt" style="width:100%" onclick="saveEditResp(\''+pg+'\',\''+id+'\',\''+ft+'\','+ri+')">Save Changes</button>',true);}
function saveEditResp(pg,id,ft,ri){const form=DB.forms[id][ft];const r=DB.responses[id][ft][ri];if(!r)return;const a={};form.forEach((f,i)=>{const el=$('#ff_'+i);a[f.label]=el?el.value:'';});r.answers=a;save();closeModal();toast('Updated ✓');render(pg);}
function delResp(pg,id,ft,ri){DB.responses[id][ft].splice(ri,1);save();toast('Deleted');render(pg);}
function vReg(){if(!SEL.registration)return progListPage('registration','Participant Registration','Upload a sheet with the questions in row 1 and the responses below · re-uploading never doubles the figures');const id=SEL.registration;if(!SUB)SUB='Form Builder';const tabs=['Form Builder','QR Code','Fill / Preview','Responses'];let b='';if(SUB==='Form Builder')b=fieldBuilder('registration',id,'registration');else if(SUB==='QR Code')b=qrPanel(id,'registration');else if(SUB==='Fill / Preview')b=formPreview('registration',id,'registration');else b=responsesView('registration',id,'registration');$('#view').innerHTML=wsHeader('registration',id,tabs)+b;}
function vFeed(){if(!SEL.feedback)return progListPage('feedback','Feedback','Track who has submitted · every comment captured in full · re-uploading never doubles the counts');const id=SEL.feedback;if(!SUB)SUB='Summary';const tabs=['Summary','Form Builder','QR Code','Fill / Preview','Responses'];let b='';if(SUB==='Summary')b=perStatusCard(id)+fbSummary(id);else if(SUB==='Form Builder')b=fieldBuilder('feedback',id,'feedback');else if(SUB==='QR Code')b=qrPanel(id,'feedback');else if(SUB==='Fill / Preview')b=formPreview('feedback',id,'feedback');else b=responsesView('feedback',id,'feedback');$('#view').innerHTML=wsHeader('feedback',id,tabs)+b;}
function qrPanel(id,ft){const n={registration:'Registration',feedback:'Feedback',entry:'Entry Test',exit:'Exit Test'};return '<div class="card"><div class="chart-title">🔗 '+n[ft]+' QR Code</div><button class="btn" onclick="qr(\''+id+'\',\''+ft+'\')">Show / Generate QR Code</button></div>';}
function vAssess(){if(!SEL.assessment)return assessList();const id=SEL.assessment;if(!SUB)SUB='Scores';const tabs=['Build Entry Test','Build Exit Test','QR Code','Take Test','Scores'];let b='';if(SUB==='Build Entry Test')b=quizBuilder(id,'entry','Entry');else if(SUB==='Build Exit Test')b=quizBuilder(id,'exit','Exit');else if(SUB==='QR Code')b='<div class="row">'+qrPanel(id,'entry')+qrPanel(id,'exit')+'</div>';else if(SUB==='Take Test')b=takePanel(id);else b=scoresPanel(id);$('#view').innerHTML=wsHeader('assessment',id,tabs)+b;}
function assessList(){const fy=currentFY();const l=sortByDate(applyFilters('assessment',progsInFY(fy)),PSORT.assessment);
 $('#view').innerHTML='<div class="page-h"><div><h2>Entry / Exit Test Management</h2><p>Question bank, QR code, auto-scoring, gain ratio, score editing &amp; submission status</p></div>'+fySelector('assessment')+'</div>'+importBar('test')+filterBar('assessment')+'<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin:0 2px 12px"><p style="color:var(--muted);font-size:13px;margin:0">Showing <b>'+l.length+'</b> programme(s).</p>'+sortControl('assessment')+'</div>'+(l.length?'<div class="progcards">'+l.map((p,i)=>{const c=['','p','o','b'][i%4];const g=gainRatio(p.id);const pe=pendingCount(p.id,'Entry'),px=pendingCount(p.id,'Exit');
 return '<div class="progcard '+c+'" onclick="openWS(\'assessment\',\''+p.id+'\',\'Scores\')" style="cursor:pointer"><h3>'+p.name+'</h3><div class="meta"><span class="pill">'+p.id+'</span> · '+p.mode+'<br>'+fmtDate(p.start)+' → '+fmtDate(endOf(p))+'<br><b>Gain Ratio:</b> '+(g.ok?'<b style="color:var(--green-d)">'+(g.gr*100).toFixed(2)+'%</b>':'—')+'</div><div style="margin-top:6px">'+tgChips(pTG(p),3)+'</div>'+
 '<div style="margin-top:8px">'+((pe+px)?('<span class="tag a">⏳ '+pe+' entry · '+px+' exit pending</span>'):'<span class="tag g">✓ All tests submitted</span>')+'</div>'+
 '<div class="cnt"><div><b>'+DB.forms[p.id].entry.length+'</b>Entry Qs</div><div><b>'+DB.forms[p.id].exit.length+'</b>Exit Qs</div><div><b>'+DB.responses[p.id].tests.length+'</b>Scores</div></div></div>';}).join('')+'</div>':'<div class="card"><div class="empty">No programmes.</div></div>');restoreSearchFocus('assessment');}
function quizBuilder(id,ft,lbl){const qs=DB.forms[id][ft];return '<div class="card"><div class="chart-title">🧪 '+lbl+' Test — Question Bank ('+qs.length+')<span style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn sm sec" onclick="quizTemplate()">⬇️ Question Template</button><button class="btn sm sec" onclick="triggerUpload(\''+id+'\',\''+ft+'\')">📤 Upload Excel</button><button class="btn sm" onclick="editQ(\''+id+'\',\''+ft+'\',-1)">+ Add Question</button></span></div>'+(qs.length?qs.map((q,i)=>'<div class="q"><div style="display:flex;justify-content:space-between;gap:10px"><b>Q'+(i+1)+'. '+q.q+'</b><span style="display:flex;gap:6px;flex-shrink:0;align-items:center"><span class="tag o">'+qPoints(q)+' pt</span><button class="btn sm sec" onclick="editQ(\''+id+'\',\''+ft+'\','+i+')">Edit</button><button class="btn sm danger" onclick="delQ(\''+id+'\',\''+ft+'\','+i+')">Delete</button></span></div>'+q.opts.map((o,j)=>'<div class="opt '+(j===q.ans?'correct':'')+'">'+String.fromCharCode(65+j)+'. '+o+' '+(j===q.ans?'✓':'')+'</div>').join('')+'</div>').join(''):'<div class="empty">No questions yet.</div>')+'<input type="file" id="quizFile" accept=".xlsx,.xls,.csv" style="display:none"></div>';}
function editQ(id,ft,idx){const ed=idx>=0;const q=ed?DB.forms[id][ft][idx]:{q:'',opts:['','','',''],ans:0,points:1};openModal('<button class="x" onclick="closeModal()">✕</button><h3>'+(ed?'Edit Question':'Add Question')+'</h3><div class="mt"><label>Question</label><textarea id="q_text" rows="2">'+esc(q.q)+'</textarea></div>'+[0,1,2,3].map(i=>'<div class="mt"><label>Option '+String.fromCharCode(65+i)+'</label><input id="q_o'+i+'" value="'+esc(q.opts[i])+'"></div>').join('')+'<div class="row mt"><div class="col"><label>Correct Option</label><select id="q_ans">'+[0,1,2,3].map(i=>'<option value="'+i+'" '+(i===q.ans?'selected':'')+'>'+String.fromCharCode(65+i)+'</option>').join('')+'</select></div><div class="col"><label>Points</label><input id="q_pts" type="number" min="0" step="0.5" value="'+qPoints(q)+'"></div></div><button class="btn mt" style="width:100%" onclick="saveQ(\''+id+'\',\''+ft+'\','+idx+')">'+(ed?'Save Changes':'Add to Bank')+'</button>');}
function saveQ(id,ft,idx){const t=$('#q_text').value.trim();if(!t){toast('Enter question');return}let p=parseFloat($('#q_pts').value);if(isNaN(p)||p<0)p=1;const it={q:t,opts:[0,1,2,3].map(i=>$('#q_o'+i).value||'Option '+String.fromCharCode(65+i)),ans:+$('#q_ans').value,points:p};if(idx>=0)DB.forms[id][ft][idx]=it;else DB.forms[id][ft].push(it);save();closeModal();toast('Saved ✓');render('assessment');}
function delQ(id,ft,i){DB.forms[id][ft].splice(i,1);save();toast('Deleted');render('assessment')}
function quizTemplate(){downloadTemplate([['Question','Option A','Option B','Option C','Option D','Correct (A/B/C/D)','Points'],['NABARD was established in the year?','1975','1982','1991','2005','B','1']],'Quiz_Question_Template');}
function triggerUpload(id,ft){const inp=$('#quizFile');inp.value='';inp.onchange=e=>{const f=e.target.files[0];if(f)readSheet(f,rows=>importQuizRows(rows,id,ft));};inp.click();}
function importQuizRows(rows,id,ft){if(!rows.length)return;const first=(rows[0]||[]).map(c=>(''+c).toLowerCase());const data=first.some(c=>c.includes('question'))?rows.slice(1):rows;let add=0,dup=0;data.forEach(r=>{if(!r||!r[0])return;const opts=[r[1],r[2],r[3],r[4]].map(o=>(o==null?'':(''+o).trim()));if(!opts[0]||!opts[1])return;let cr=(''+(r[5]||'A')).trim().toUpperCase();let an={'A':0,'B':1,'C':2,'D':3}[cr[0]];if(an==null)an=0;let p=parseFloat(r[6]);if(isNaN(p))p=1;const q=(''+r[0]).trim();
 if(DB.forms[id][ft].some(x=>x.q.trim().toLowerCase()===q.toLowerCase())){dup++;return;}
 DB.forms[id][ft].push({q,opts,ans:an,points:p});add++;});save();toast('Imported '+add+' question(s)'+(dup?' · '+dup+' already in the bank, skipped':'')+' ✓');render('assessment');}
function takePanel(id){const n=registeredNames(id);return '<div class="card"><div class="chart-title">▶ Take Test</div><div class="row"><div class="col"><label>Participant Name</label>'+(n.length?'<select id="tk_name"><option value="">— Select —</option>'+n.map(x=>'<option>'+x+'</option>').join('')+'</select>':'<input id="tk_name">')+'</div><div class="col"><label>Test Type</label><select id="tk_type" onchange="renderTakeQs(\''+id+'\')"><option>Entry</option><option>Exit</option></select></div></div><div id="tk_qs" class="mt"></div><button class="btn mt" style="width:100%" onclick="scoreTest(\''+id+'\')">Submit &amp; Score</button><div id="tk_out"></div></div>';}
function renderTakeQs(id){const ft=$('#tk_type').value.toLowerCase();const qs=DB.forms[id][ft];$('#tk_qs').innerHTML=qs.length?qs.map((q,i)=>'<div class="q" data-ans="'+q.ans+'" data-pts="'+qPoints(q)+'"><b>Q'+(i+1)+'. '+q.q+'</b>'+q.opts.map((o,j)=>'<div class="opt" onclick="pick(this,'+i+')" data-j="'+j+'">'+String.fromCharCode(65+j)+'. '+o+'</div>').join('')+'</div>').join(''):'<div class="empty">No questions.</div>';window.picks={};}
window.picks={};
function pick(el,i){el.parentNode.querySelectorAll('.opt').forEach(o=>{o.style.borderColor='var(--line)';o.style.background='#fff'});el.style.borderColor='var(--green)';el.style.background='var(--green-l)';window.picks[i]=+el.dataset.j}
function scoreTest(id){const nm=$('#tk_name').value.trim()||'Participant';const ft=$('#tk_type').value;const qs=DB.forms[id][ft.toLowerCase()];if(!qs.length)return;let s=0,tot=0;document.querySelectorAll('#tk_qs .q').forEach((qd,i)=>{const c=+qd.dataset.ans;const p=parseFloat(qd.dataset.pts)||0;tot+=p;qd.querySelectorAll('.opt').forEach(o=>{const j=+o.dataset.j;if(j===c)o.className='opt correct';else if(window.picks[i]===j)o.className='opt wrong';});if(window.picks[i]===c)s+=p;});
 const T=DB.responses[id].tests;const d=T.findIndex(x=>normName(x.name)===normName(nm)&&x.type===ft);
 const rec={name:nm,type:ft,score:s,total:tot};
 if(d>=0)T[d]=rec;else T.push(rec);save();
 const left=pendingCount(id,ft);
 $('#tk_out').innerHTML='<div class="notice mt" style="text-align:center;font-size:16px">Score: <b>'+s+' / '+tot+'</b> — recorded ✓'+(left?('<div style="font-size:12.5px;font-weight:400;margin-top:4px">'+left+' participant(s) are still to take the '+ft.toLowerCase()+' test</div>'):'<div style="font-size:12.5px;font-weight:400;margin-top:4px">Everyone has now taken the '+ft.toLowerCase()+' test 🎉</div>')+'</div>';window.picks={};}
function setScoreView(v,id){SCOREVIEW=v;render('assessment');}
function scoreModal(id,gi){const T=DB.responses[id].tests;const ed=(gi!=null&&gi>=0);const t=ed?T[gi]:{name:'',type:'Entry',score:'',total:20};
 const names=registeredNames(id);
 const nameField=names.length?('<select id="sc_name"><option value="">— Select participant —</option>'+names.map(n=>'<option '+(t.name===n?'selected':'')+'>'+n+'</option>').join('')+((t.name&&names.indexOf(t.name)<0)?'<option selected>'+esc(t.name)+'</option>':'')+'</select>'):('<input id="sc_name" value="'+esc(t.name)+'">');
 openModal('<button class="x" onclick="closeModal()">✕</button><h3>'+(ed?'✏️ Edit Test Score':'+ Add Test Score')+'</h3>'+
 '<p style="color:var(--muted);font-size:13px;margin-top:6px">'+esc(prog(id).name)+'</p>'+
 '<div class="mt"><label>Participant <span class="req">*</span></label>'+nameField+'</div>'+
 '<div class="row mt"><div class="col"><label>Test Type</label><select id="sc_type">'+['Entry','Exit'].map(x=>'<option '+(t.type===x?'selected':'')+'>'+x+'</option>').join('')+'</select></div>'+
 '<div class="col"><label>Score <span class="req">*</span></label><input id="sc_score" type="number" min="0" step="0.5" value="'+(t.score!==''&&t.score!=null?t.score:'')+'"></div>'+
 '<div class="col"><label>Maximum marks</label><input id="sc_total" type="number" min="1" step="0.5" value="'+(t.total||20)+'"></div></div>'+
 '<div class="notice mt" style="font-size:12.5px">Recording a score removes that participant from the <b>Submission Status</b> pending list and recalculates the gain ratio automatically.</div>'+
 '<div class="row mt" style="gap:8px"><button class="btn" style="flex:1" onclick="saveScore(\''+id+'\','+(ed?gi:-1)+')">'+(ed?'Save Changes':'Add Score')+'</button>'+(ed?'<button class="btn danger" onclick="delScore(\''+id+'\','+gi+')">🗑️ Delete</button>':'<button class="btn ghost" onclick="closeModal()">Cancel</button>')+'</div>');}
function saveScore(id,gi){const nm=($('#sc_name').value||'').trim();if(!nm){toast('Select or enter the participant');return;}
 const sv=$('#sc_score').value;if(sv===''){toast('Enter the score');return;}
 let sc=Math.max(0,+sv);let tt=Math.max(1,+($('#sc_total').value||20));
 if(sc>tt){toast('Score cannot exceed the maximum marks');return;}
 const rec={name:nm,type:$('#sc_type').value,score:sc,total:tt};
 const T=DB.responses[id].tests;
 if(gi>=0)T[gi]=rec;else{const dup=T.findIndex(x=>normName(x.name)===normName(nm)&&x.type===rec.type);if(dup>=0){T[dup]=rec;save();closeModal();toast('Existing '+rec.type+' score for '+nm+' updated ✓');render('assessment');return;}T.push(rec);}
 save();closeModal();
 const left=pendingCount(id,rec.type);
 toast((gi>=0?'Score updated ✓':'Score added ✓')+(left?(' · '+left+' participant(s) still to take the '+rec.type.toLowerCase()+' test'):' · everyone has now taken the '+rec.type.toLowerCase()+' test 🎉'));
 render('assessment');}
function delScore(id,gi){const t=DB.responses[id].tests[gi];if(!t)return;
 openModal('<button class="x" onclick="closeModal()">✕</button><h3>🗑️ Delete Score</h3><p style="margin-top:8px">Delete the <b>'+t.type+'</b> score of <b>'+esc(t.name)+'</b> ('+t.score+'/'+t.total+')?</p><p style="font-size:12.5px;color:var(--muted)">The participant will reappear in the Submission Status pending list.</p><div class="row" style="margin-top:14px"><button class="btn ghost" style="flex:1" onclick="closeModal()">Cancel</button><button class="btn danger" style="flex:1" onclick="delScoreConfirm(\''+id+'\','+gi+')">Delete</button></div>');}
function delScoreConfirm(id,gi){DB.responses[id].tests.splice(gi,1);save();closeModal();toast('Score deleted');render('assessment');}
function bulkScoreModal(id){const rows=testsByName(id);const names=registeredNames(id);
 const all=names.length?names:rows.map(r=>r.name);
 const body=all.map(n=>{const r=rows.find(x=>normName(x.name)===normName(n))||{};const e=r.entry,x=r.exit;
  return '<tr><td style="font-size:13px"><b>'+esc(n)+'</b>'+((!e||!x)?(' <span class="tag a">'+(!e&&!x?'both pending':(!e?'entry pending':'exit pending'))+'</span>'):'')+'</td>'+
   '<td style="text-align:center"><input class="sc-in" id="bs_e_'+esc(n).replace(/[^a-zA-Z0-9]/g,'_')+'" type="number" min="0" step="0.5" value="'+(e?e.score:'')+'" placeholder="—"></td>'+
   '<td style="text-align:center"><input class="sc-in" id="bs_x_'+esc(n).replace(/[^a-zA-Z0-9]/g,'_')+'" type="number" min="0" step="0.5" value="'+(x?x.score:'')+'" placeholder="—"></td></tr>';}).join('');
 openModal('<button class="x" onclick="closeModal()">✕</button><h3>✏️ Edit All Scores</h3>'+
 '<p style="color:var(--muted);font-size:13px;margin-top:6px">'+esc(prog(id).name)+' — edit entry and exit scores for every participant in one go. Blank boxes show who is still pending; leave a box blank to remove that score.</p>'+
 '<div class="row mt" style="align-items:flex-end"><div class="col" style="max-width:190px"><label>Maximum marks for all</label><input id="bs_total" type="number" min="1" step="0.5" value="'+gainRatio(id).maxT+'"></div></div>'+
 '<div class="mt" style="max-height:50vh;overflow:auto"><table><thead><tr><th>Participant</th><th style="text-align:center">Entry score</th><th style="text-align:center">Exit score</th></tr></thead><tbody>'+(body||'<tr><td colspan="3"><div class="empty">No participants registered yet.</div></td></tr>')+'</tbody></table></div>'+
 '<button class="btn mt" style="width:100%" onclick="saveBulkScores(\''+id+'\')">Save All Scores</button>',true);}
function saveBulkScores(id){const names=registeredNames(id);const rows=testsByName(id);
 const all=names.length?names:rows.map(r=>r.name);
 const tt=Math.max(1,+($('#bs_total').value||20));
 const out=[];let bad=0;
 all.forEach(n=>{const k=esc(n).replace(/[^a-zA-Z0-9]/g,'_');
  const ee=document.getElementById('bs_e_'+k),xe=document.getElementById('bs_x_'+k);
  if(ee&&ee.value!==''){const v=Math.max(0,+ee.value);if(v>tt)bad++;else out.push({name:n,type:'Entry',score:v,total:tt});}
  if(xe&&xe.value!==''){const v=Math.max(0,+xe.value);if(v>tt)bad++;else out.push({name:n,type:'Exit',score:v,total:tt});}});
 if(bad){toast(bad+' score(s) exceed the maximum marks — please correct');return;}
 const keep=DB.responses[id].tests.filter(t=>all.every(n=>normName(n)!==normName(t.name)));
 DB.responses[id].tests=keep.concat(out);
 save();closeModal();
 const left=pendingCount(id,'Entry')+pendingCount(id,'Exit');
 toast('Saved '+out.length+' score(s) ✓'+(left?(' · '+left+' submission(s) still awaited'):' · all tests are now complete 🎉'));
 render('assessment');}
function scoresPanel(id){const t=DB.responses[id].tests;const en=t.filter(x=>x.type==='Entry'),ex=t.filter(x=>x.type==='Exit');const ae=en.length?(en.reduce((a,b)=>a+b.score,0)/en.length).toFixed(1):'—';const ax=ex.length?(ex.reduce((a,b)=>a+b.score,0)/ex.length).toFixed(1):'—';const g=gainRatio(id);const can=(ROLE==='Admin'||ROLE==='PD/Co-PD');
 const pe=pendingCount(id,'Entry'),px=pendingCount(id,'Exit');const pend=pe+px;
 const kpis='<div class="kpis"><div class="kpi p"><div class="n">'+ae+'</div><div class="l">Avg Entry Score</div></div><div class="kpi o"><div class="n">'+ax+'</div><div class="l">Avg Exit Score</div></div><div class="kpi"><div class="n">'+(g.ok?(g.gr*100).toFixed(2)+'%':'—')+'</div><div class="l">Gain Ratio<br><span style="font-size:10px">(weighted average method)</span></div></div>'+
  (pend?('<div class="kpi a"><div class="n">'+pend+'</div><div class="l">⏳ Yet to submit<br><span style="font-size:10px">'+pe+' entry · '+px+' exit</span></div></div>'):'<div class="kpi"><div class="n">✓</div><div class="l">All participants submitted</div></div>')+'</div>';
 const banner='<div class="notice'+(pend?' amber':'')+'" style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">'+
  '<span>'+(pend?('⏳ <b>'+pend+'</b> test submission(s) are still awaited from the registered participants.'):'✅ Every registered participant has taken both the entry and the exit test.')+'</span>'+
  ssStrip(id,['Entry','Exit'])+'</div>';
 const fr='<div class="subnav" style="margin-bottom:0">'+['Entry','Exit','Consolidated'].map(v=>'<button class="'+(SCOREVIEW===v?'active':'')+'" onclick="setScoreView(\''+v+'\',\''+id+'\')">'+(v==='Consolidated'?'📊 Consolidated':(v==='Entry'?'🔵 Entry only':'🟢 Exit only'))+'</button>').join('')+'</div>';
 const tools=can
  ?('<span style="display:flex;gap:6px;flex-wrap:wrap;align-items:center"><span class="sortnote">Click a heading to sort</span>'+
    '<button class="btn sm sec" onclick="testTemplate(\''+id+'\')">⬇️ Score sheet</button>'+
    '<button class="btn sm sec" onclick="bulkScoreModal(\''+id+'\')">✏️ Edit All Scores</button>'+
    '<button class="btn sm" onclick="scoreModal(\''+id+'\',-1)">+ Add Score</button>'+
    '<button class="btn sm warn" onclick="submissionStatusModal(\''+id+'\',\'test\')">🔔 Submission Status'+(pend?(' ('+pend+')'):'')+'</button></span>')
  :('<span style="display:flex;gap:6px;flex-wrap:wrap;align-items:center"><span class="sortnote">Click a heading to sort</span><button class="btn sm warn" onclick="submissionStatusModal(\''+id+'\',\'test\')">🔔 Submission Status'+(pend?(' ('+pend+')'):'')+'</button></span>');
 let tbl;
 if(SCOREVIEW==='Consolidated'){const key='assessment|cons|'+id;const st=tsGet(key);
  let rows=testsByName(id).map(x=>({name:x.name,e:x.entry?x.entry.score:'',et:x.entry?x.entry.total:'',x:x.exit?x.exit.score:'',xt:x.exit?x.exit.total:'',g:(x.entry&&x.exit)?(x.exit.score-x.entry.score):'',ei:x.entryIdx,xi:x.exitIdx}));
  if(st)rows=sortRows(rows,st.col,st.dir,(r,c)=>[r.name,r.e,r.x,r.g][c]);
  tbl=rows.length?'<div style="overflow:auto;max-height:520px"><table><thead><tr>'+sortableTH(key,0,'Participant')+sortableTH(key,1,'Entry','style="text-align:center"')+sortableTH(key,2,'Exit','style="text-align:center"')+sortableTH(key,3,'Gain','style="text-align:center"')+(can?'<th></th>':'')+'</tr></thead><tbody>'+rows.map(x=>{const e1=(x.e!=='')?(x.e+'/'+x.et):'<span class="tag a">pending</span>',e2=(x.x!=='')?(x.x+'/'+x.xt):'<span class="tag a">pending</span>';const gg=x.g;
   const act=can?('<td style="white-space:nowrap;display:flex;gap:5px">'+(x.ei!=null?'<button class="btn sm sec" onclick="scoreModal(\''+id+'\','+x.ei+')">✏️ Entry</button>':'')+(x.xi!=null?'<button class="btn sm sec" onclick="scoreModal(\''+id+'\','+x.xi+')">✏️ Exit</button>':'')+'</td>'):'';
   return '<tr><td><b>'+esc(x.name)+'</b></td><td style="text-align:center">'+((x.e!=='')?('<span class="tag b">'+e1+'</span>'):e1)+'</td><td style="text-align:center">'+((x.x!=='')?('<span class="tag g">'+e2+'</span>'):e2)+'</td><td style="text-align:center">'+(gg===''?'—':(gg>0?'<span class="tag g">▲ +'+gg+'</span>':'<span class="tag o">'+gg+'</span>'))+'</td>'+act+'</tr>';}).join('')+'</tbody></table></div>':'<div class="empty">No scores yet.</div>';}
 else {const key='assessment|'+SCOREVIEW+'|'+id;const st=tsGet(key);
  let l=t.map((x,gi)=>({x,gi})).filter(o=>o.x.type===SCOREVIEW).map(o=>({name:o.x.name,type:o.x.type,score:o.x.score,total:o.x.total,pct:o.x.total?Math.round(o.x.score/o.x.total*100):0,gi:o.gi}));
  if(st)l=sortRows(l,st.col,st.dir,(r,c)=>[r.name,r.type,r.score,r.pct][c]);
  tbl=l.length?'<div style="overflow:auto;max-height:520px"><table><thead><tr>'+sortableTH(key,0,'Participant')+sortableTH(key,1,'Type')+sortableTH(key,2,'Score')+sortableTH(key,3,'%')+(can?'<th></th>':'')+'</tr></thead><tbody>'+l.map(x=>'<tr><td><b>'+esc(x.name)+'</b></td><td><span class="tag '+(x.type==='Entry'?'b':'g')+'">'+x.type+'</span></td><td>'+x.score+'/'+x.total+'</td><td>'+x.pct+'%</td>'+(can?'<td style="white-space:nowrap;display:flex;gap:6px"><button class="btn sm sec" onclick="scoreModal(\''+id+'\','+x.gi+')">✏️</button><button class="btn sm danger" onclick="delScore(\''+id+'\','+x.gi+')">🗑️</button></td>':'')+'</tr>').join('')+'</tbody></table></div>':'<div class="empty">No '+SCOREVIEW+' scores yet.</div>';}
 return kpis+grCard(id)+'<div class="card">'+banner+'<div class="chart-title" style="margin-top:12px">📋 Scores'+tools+'</div>'+fr+'<div class="mt">'+tbl+'</div></div>';}
function buildParticipantDB(fyF){const m={};DB.programmes.forEach(p=>{if(fyF&&fyF!=='ALL'&&fyOf(p.start)!==fyF)return;const ts=DB.responses[p.id].tests;DB.responses[p.id].registration.forEach(r=>{const a=r.answers||{};const nm=aName(a)||'—';const mo=aMobile(a);const k=blKey(nm,mo);const rec=m[k]||(m[k]={name:nm,mobile:mo,org:aOrg(a),orgType:aOrgType(a),state:aState(a),desig:aDesig(a),email:aEmail(a),attended:[]});const e1=ts.find(t=>normName(t.name)===normName(nm)&&t.type==='Entry');const e2=ts.find(t=>normName(t.name)===normName(nm)&&t.type==='Exit');if(rec.attended.some(x=>x.id===p.id))return;rec.attended.push({id:p.id,name:p.name,fy:fyOf(p.start),start:p.start,end:endOf(p),entry:e1,exit:e2});});});return Object.values(m).sort((a,b)=>a.name.localeCompare(b.name));}
function blModal(name,mobile,org,progId){const ex=blFind(name,mobile);const ed=!!ex;
 const progs=buildParticipantDB('ALL').find(r=>blKey(r.name,r.mobile)===blKey(name,mobile));
 const opts=(progs?progs.attended:[]).map(a=>'<option value="'+a.id+'" '+((ex&&ex.prog===a.id)||(!ed&&progId===a.id)?'selected':'')+'>'+a.id+' — '+a.name+'</option>').join('');
 openModal('<button class="x" onclick="closeModal()">✕</button><h3 class="red">⛔ '+(ed?'Edit Blacklist Entry':'Blacklist Participant')+'</h3>'+
 '<div class="notice red mt">Blacklisting marks this participant in <b>red</b> across the application and records the reason for future reference while screening nominations.</div>'+
 '<div class="card" style="padding:12px 14px;margin-bottom:12px;box-shadow:none;border:1px solid var(--line)"><b style="color:var(--red)">'+esc(name)+'</b><div style="font-size:12.5px;color:var(--muted);margin-top:3px">📱 '+esc(mobile||'—')+' · 🏦 '+esc(org||'—')+'</div></div>'+
 '<div class="mt"><label>Reason for blacklisting <span class="req">*</span></label><select id="bl_reason">'+BLACKLIST_REASONS.map(r=>'<option '+((ex&&ex.reason===r)?'selected':'')+'>'+r+'</option>').join('')+'</select></div>'+
 '<div class="mt"><label>Detailed remarks <span style="font-weight:400;color:var(--muted)">(what happened, when — for the record)</span></label><textarea id="bl_remarks" rows="4">'+esc(ex?ex.remarks:'')+'</textarea></div>'+
 (opts?'<div class="mt"><label>Programme in which the incident occurred</label><select id="bl_prog"><option value="">— Not specific to a programme —</option>'+opts+'</select></div>':'')+
 '<div class="row mt" style="gap:8px"><button class="btn danger" style="flex:1" onclick="blSave(\''+esc(name).replace(/'/g,"\\'")+'\',\''+esc(mobile)+'\',\''+esc(org||'').replace(/'/g,"\\'")+'\')">⛔ '+(ed?'Update Blacklist Entry':'Blacklist Participant')+'</button>'+(ed?'<button class="btn sec" onclick="blLift(\''+esc(name).replace(/'/g,"\\'")+'\',\''+esc(mobile)+'\')">↩ Remove from Blacklist</button>':'<button class="btn ghost" onclick="closeModal()">Cancel</button>')+'</div>');}
function blSave(name,mobile,org){const reason=$('#bl_reason').value;const remarks=$('#bl_remarks').value.trim();
 if(!remarks){toast('Please record the detailed remarks');return;}
 const pe=document.getElementById('bl_prog');const pid=pe?pe.value:'';
 blAdd({name,mobile,org,reason,remarks,prog:pid,progName:pid?progName(pid):'',by:USER,at:new Date().toISOString().slice(0,10)});
 closeModal();toast('⛔ '+name+' has been blacklisted');vPDB();}
function blLift(name,mobile){openModal('<button class="x" onclick="closeModal()">✕</button><h3>↩ Remove from Blacklist</h3><p style="margin-top:8px">Remove <b>'+esc(name)+'</b> from the blacklist?</p><div class="row" style="margin-top:14px"><button class="btn ghost" style="flex:1" onclick="closeModal()">Cancel</button><button class="btn" style="flex:1" onclick="blLiftConfirm(\''+esc(name).replace(/'/g,"\\'")+'\',\''+esc(mobile)+'\')">Remove</button></div>');}
function blLiftConfirm(name,mobile){blRemove(name,mobile);closeModal();toast('Removed from blacklist ✓');vPDB();}
function blView(){const key='pdb|blacklist';const st=tsGet(key);
 let l=blList().slice();
 if(st)l=sortRows(l,st.col,st.dir,(r,c)=>[r.name,r.org,r.reason,r.remarks,r.progName,r.at][c]);
 else l.sort((a,b)=>(''+b.at).localeCompare(''+a.at));
 openModal('<button class="x" onclick="closeModal()">✕</button><h3 class="red">⛔ Blacklisted Participants ('+l.length+')</h3>'+
 '<p style="color:var(--muted);font-size:13px;margin-top:6px">Participants blacklisted on grounds of poor performance, misconduct or other reasons. <span class="sortnote">Click any column heading to sort.</span></p>'+
 (l.length?'<div class="row mt" style="gap:8px"><button class="btn sm sec" onclick="exBlacklist()">⬇️ Export list (CSV)</button></div>':'')+
 '<div class="mt" style="max-height:56vh;overflow:auto">'+
 (l.length?'<table><thead><tr>'+sortableTH(key,0,'Participant')+sortableTH(key,1,'Organisation')+sortableTH(key,2,'Reason')+sortableTH(key,3,'Remarks')+sortableTH(key,4,'Programme')+sortableTH(key,5,'Blacklisted on')+'<th></th></tr></thead><tbody>'+
  l.map(b=>'<tr class="blkrow"><td><b>⛔ '+esc(b.name)+'</b><br><small>📱 '+esc(b.mobile||'—')+'</small></td><td style="font-size:12.5px">'+esc(b.org||'—')+'</td><td><span class="tag r">'+esc(b.reason)+'</span></td><td style="font-size:12.5px;max-width:280px">'+esc(b.remarks||'—')+'</td><td style="font-size:12px">'+(b.progName?('<span class="pill">'+esc(b.prog)+'</span><br>'+esc(b.progName)):'—')+'</td><td style="font-size:12px">'+fmtDate(b.at)+'<br><small>by '+esc(b.by||'—')+'</small></td><td style="white-space:nowrap"><button class="btn sm sec" onclick="blModal(\''+esc(b.name).replace(/'/g,"\\'")+'\',\''+esc(b.mobile)+'\',\''+esc(b.org||'').replace(/'/g,"\\'")+'\')">✏️ Edit</button></td></tr>').join('')+'</tbody></table>'
  :'<div class="empty">No participant has been blacklisted.</div>')+'</div>',true);}
function setPDBStatus(v){PDBSTATUS=v;vPDB();}
function vPDB(){const fo=fyList();if(PDBFY!=='ALL'&&!fo.includes(PDBFY))PDBFY='ALL';
 const all=buildParticipantDB(PDBFY);const q=PDBQ.trim().toLowerCase();
 let l=q?all.filter(r=>r.name.toLowerCase().includes(q)||(''+r.mobile).includes(q)||(''+r.org).toLowerCase().includes(q)):all;
 if(PDBSTATUS==='Blacklisted')l=l.filter(r=>isBlacklisted(r.name,r.mobile));
 else if(PDBSTATUS==='Active')l=l.filter(r=>!isBlacklisted(r.name,r.mobile));
 const ta=all.reduce((a,r)=>a+r.attended.length,0);const nb=blCount();
 $('#view').innerHTML='<div class="page-h"><div><h2>Participant Database</h2><p>Master record of every participant · blacklist participants and record the reason</p></div><div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><div class="fybox"><label>📅 Financial Year</label><select onchange="PDBFY=this.value;vPDB()"><option value="ALL" '+(PDBFY==='ALL'?'selected':'')+'>All Financial Years</option>'+fo.map(f=>'<option value="'+f+'" '+(PDBFY===f?'selected':'')+'>FY '+f+'</option>').join('')+'</select></div><button class="btn danger" onclick="blView()">⛔ Blacklisted Participants ('+nb+')</button></div></div>'+
 '<div class="card" style="padding:14px 16px;border-left:4px solid var(--orange)"><div class="chart-title" style="margin-bottom:8px">🔎 Check Nominations for Previous Participation &amp; Blacklist<span style="display:flex;gap:6px"><button class="btn sm sec" onclick="nominationTemplate()">⬇️ Template</button><button class="btn sm" onclick="checkNominations()">📤 Upload</button></span></div><p style="font-size:12.5px;color:var(--muted);margin:0">Flags anyone who has already attended a programme, and highlights any nominee who is <b style="color:var(--red)">blacklisted</b>. The mobile column is optional.</p></div>'+
 '<div class="kpis"><div class="kpi"><div class="n">'+all.length+'</div><div class="l">Unique Participants</div></div><div class="kpi b"><div class="n">'+ta+'</div><div class="l">Total Attendances</div></div><div class="kpi p"><div class="n">'+((PDBFY==='ALL')?DB.programmes.length:progsInFY(PDBFY).length)+'</div><div class="l">Programmes Covered</div></div><div class="kpi r"><div class="n">'+nb+'</div><div class="l">⛔ Blacklisted</div></div></div>'+
 '<div class="card" style="padding:14px 16px"><div class="row" style="align-items:flex-end"><div class="col" style="min-width:220px"><label>🔍 Search by name / mobile / organisation</label><input id="pdb_search" value="'+esc(PDBQ)+'" oninput="PDBQ=this.value;pdbRefresh()"></div><div class="col" style="max-width:220px"><label>🚦 Status</label><select onchange="setPDBStatus(this.value)"><option '+(PDBSTATUS==='All'?'selected':'')+'>All</option><option '+(PDBSTATUS==='Active'?'selected':'')+'>Active</option><option '+(PDBSTATUS==='Blacklisted'?'selected':'')+'>Blacklisted</option></select></div></div></div>'+
 '<p style="color:var(--muted);font-size:13px;margin:0 0 12px 2px">Showing <b id="pdb_count">'+l.length+'</b> participant(s)'+(PDBSTATUS!=='All'?(' · '+PDBSTATUS.toLowerCase()+' only'):'')+'.</p><div id="pdb_list">'+pdbListHTML(l)+'</div>';
 const si=$('#pdb_search');if(si&&PDBQ){si.focus();si.setSelectionRange(si.value.length,si.value.length);}}
function pdbListHTML(l){if(!l.length)return '<div class="card"><div class="empty">No participants match.</div></div>';
 return l.map(r=>{const n=r.attended.length;const b=blFind(r.name,r.mobile);const can=(ROLE==='Admin'||ROLE==='PD/Co-PD');
 const nmArg='\''+esc(r.name).replace(/'/g,"\\'")+'\',\''+esc(r.mobile)+'\',\''+esc(r.org||'').replace(/'/g,"\\'")+'\'';
 return '<div class="card'+(b?' blk':'')+'"><div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px">'+
 '<div><h3 style="margin:0 0 4px'+(b?'':';color:var(--green-d)')+'" class="'+(b?'blkname':'')+'">'+(b?'⛔ ':'')+esc(r.name)+'</h3>'+
 '<div style="font-size:13px;'+(b?'color:var(--red)':'color:var(--muted)')+'">📱 '+esc(r.mobile||'—')+' · 🏦 '+esc(r.org)+' · 📍 '+esc(r.state)+'</div></div>'+
 '<div style="display:flex;gap:8px;align-items:flex-start;flex-wrap:wrap">'+
 (b?'<span class="tag r">⛔ Blacklisted</span>':'<span class="tag '+(n>1?'o':'g')+'">'+(n>1?'⚠️ '+n+' programmes':'1 programme')+'</span>')+
 (can?(b?'<button class="btn sm dangersec" onclick="blModal('+nmArg+')">✏️ Edit reason</button><button class="btn sm sec" onclick="blLift(\''+esc(r.name).replace(/'/g,"\\'")+'\',\''+esc(r.mobile)+'\')">↩ Remove</button>':'<button class="btn sm dangersec" onclick="blModal('+nmArg+')">⛔ Blacklist</button>'):'')+
 '</div></div>'+
 (b?('<div class="blkreason"><b>⛔ Blacklisted — '+esc(b.reason)+'</b><br>'+esc(b.remarks||'')+'<div style="margin-top:4px;font-size:11.5px">'+(b.progName?('Programme: '+esc(b.prog)+' — '+esc(b.progName)+' · '):'')+'Recorded by '+esc(b.by||'—')+' on '+fmtDate(b.at)+'</div></div>'):'')+
 '<div style="overflow:auto;margin-top:12px"><table><thead><tr><th>Programme</th><th>Dates</th><th style="text-align:center">Entry</th><th style="text-align:center">Exit</th></tr></thead><tbody>'+
 r.attended.map(a=>'<tr'+(b?' class="blkrow"':'')+'><td><b>'+esc(a.name)+'</b><br><small style="color:var(--muted)">'+a.id+'</small></td><td>'+fmtDate(a.start)+' → '+fmtDate(a.end)+'</td><td style="text-align:center">'+(a.entry?('<span class="tag b">'+a.entry.score+'/'+a.entry.total+'</span>'):'<span class="tag a">not taken</span>')+'</td><td style="text-align:center">'+(a.exit?('<span class="tag g">'+a.exit.score+'/'+a.exit.total+'</span>'):'<span class="tag a">not taken</span>')+'</td></tr>').join('')+'</tbody></table></div></div>';}).join('');}
function pdbRefresh(){const all=buildParticipantDB(PDBFY);const q=PDBQ.trim().toLowerCase();let l=q?all.filter(r=>r.name.toLowerCase().includes(q)||(''+r.mobile).includes(q)||(''+r.org).toLowerCase().includes(q)):all;if(PDBSTATUS==='Blacklisted')l=l.filter(r=>isBlacklisted(r.name,r.mobile));else if(PDBSTATUS==='Active')l=l.filter(r=>!isBlacklisted(r.name,r.mobile));const c=document.getElementById('pdb_count');if(c)c.textContent=l.length;const b=document.getElementById('pdb_list');if(b)b.innerHTML=pdbListHTML(l);}
function nominationTemplate(){downloadTemplate([['Name','Mobile','Organisation','Designation'],['Anita Rao','9845012321','Karnataka Gramin Bank','Manager'],['Ravi Kumar','','State Bank of India','Officer']],'Nominations_Template');}
function checkNominations(){pickFile(rows=>{const {idx,body}=headerIndex(rows);
 const iN=idx('name')>=0?idx('name'):idx('participant'),iM=idx('mobile')>=0?idx('mobile'):idx('mobile number'),iO=idx('organisation')>=0?idx('organisation'):idx('organization');
 const db=buildParticipantDB('ALL');const bm={},bn={};
 db.forEach(r=>{const mk=normMob(r.mobile);if(mk)bm[mk]=r;bn[normName(r.name)]=r;});
 const res=body.map(r=>{
  const nm=(''+((iN>=0?r[iN]:r[0])||'')).trim();if(!nm)return null;
  const mo=(''+((iM>=0?r[iM]:'')||'')).trim();const mk=normMob(mo);
  let mt=(mk&&bm[mk])?bm[mk]:(bn[normName(nm)]||null);
  let bl=blFind(nm,mo);if(!bl&&mt)bl=blFind(mt.name,mt.mobile);
  const basis=bl?(blMatchBasis(nm,mo)||(mt?'participant record':'')):'';
  return {name:nm,mobile:mo,org:(''+((iO>=0?r[iO]:'')||'')).trim(),match:mt,bl,basis};
 }).filter(Boolean);
 const att=res.filter(x=>x.match);const bl=res.filter(x=>x.bl);const clean=res.filter(x=>!x.match&&!x.bl);
 openModal('<button class="x" onclick="closeModal()">✕</button><h3>🔎 Nomination Check</h3>'+
 (bl.length?'<div class="notice red mt">⛔ <b>'+bl.length+'</b> nominee(s) are on the <b>blacklist</b> — please review before accepting the nomination.</div>':'<div class="notice mt">✅ None of the nominees is on the blacklist.</div>')+
 '<div class="kpis" style="margin-top:10px"><div class="kpi"><div class="n">'+res.length+'</div><div class="l">Checked</div></div><div class="kpi o"><div class="n">'+att.length+'</div><div class="l">⚠️ Previously Attended</div></div><div class="kpi r"><div class="n">'+bl.length+'</div><div class="l">⛔ Blacklisted</div></div><div class="kpi"><div class="n" style="color:var(--green-d)">'+clean.length+'</div><div class="l">✅ First-time</div></div></div>'+
 '<div class="mt" style="max-height:48vh;overflow:auto"><table><thead><tr><th>Nominee</th><th>Organisation</th><th style="text-align:center">Status</th><th>Blacklist reason &amp; remarks</th><th>Previously attended</th></tr></thead><tbody>'+
 res.sort((a,b)=>((b.bl?2:b.match?1:0)-(a.bl?2:a.match?1:0))).map(x=>{
  const prev=x.match?x.match.attended.map(a=>'<div style="margin:1px 0"><b>'+esc(a.name)+'</b><br><span style="color:var(--muted)">'+fmtDate(a.start)+' → '+fmtDate(a.end)+'</span></div>').join(''):'<span style="color:var(--muted)">—</span>';
  const st=x.bl?'<span class="tag r">⛔ Blacklisted</span>':(x.match?'<span class="tag o">⚠️ Attended '+x.match.attended.length+'×</span>':'<span class="tag g">✅ New</span>');
  const reason=x.bl?('<b>'+esc(x.bl.reason)+'</b><br><span style="font-size:11.5px">'+esc(x.bl.remarks||'')+'</span>'+(x.basis?'<br><span style="font-size:11px;color:var(--muted)">matched on '+esc(x.basis)+'</span>':'')):'<span style="color:var(--muted)">—</span>';
  return '<tr'+(x.bl?' class="blkrow"':'')+'><td><b>'+(x.bl?'⛔ ':'')+esc(x.name)+'</b><br><small>📱 '+esc(x.mobile||'not given')+'</small></td><td style="font-size:12.5px">'+esc(x.org||'—')+'</td><td style="text-align:center">'+st+'</td><td style="font-size:12px;max-width:290px">'+reason+'</td><td style="font-size:11.5px">'+prev+'</td></tr>';}).join('')+'</tbody></table></div>'+
 (res.length?'<div class="row mt" style="gap:8px"><button class="btn sm sec" onclick="exNomCheck()">⬇️ Export result (CSV)</button></div>':''),true);
 window.__nomRes=res;});}
function exNomCheck(){const res=window.__nomRes||[];if(!res.length){toast('Nothing to export');return;}
 csv([['Nominee','Mobile','Organisation','Status','Blacklist Reason','Blacklist Remarks','Matched on','Times Attended','Programmes Attended']].concat(res.map(x=>[x.name,x.mobile,x.org,x.bl?'Blacklisted':(x.match?'Previously Attended':'New'),x.bl?x.bl.reason:'',x.bl?(x.bl.remarks||''):'',x.basis||'',x.match?x.match.attended.length:0,x.match?x.match.attended.map(a=>a.id+' - '+a.name).join(' | '):''])),'Nomination_Check_Result.csv');}
function csv(rows,name){const c=rows.map(r=>r.map(v=>'"'+(''+v).replace(/"/g,'""')+'"').join(',')).join('\n');const b=new Blob([c],{type:'text/csv'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download=name;a.click();URL.revokeObjectURL(u);toast('Downloaded '+name);}
function exBlacklist(){csv([['Name','Mobile','Organisation','Reason','Remarks','Programme Code','Programme','Blacklisted by','Blacklisted on']].concat(blList().map(b=>[b.name,b.mobile,b.org||'',b.reason,b.remarks||'',b.prog||'',b.progName||'',b.by||'',b.at||''])),'Blacklisted_Participants.csv')}
function deptKeyFromLabel(l){for(const k in DEPT_ABBR){if(DEPT_ABBR[k]===l)return k;}return l;}
function claimsDrillPA(l){const d=deptKeyFromLabel(l);const fy=currentFY();const ps=progsInFY(fy).filter(p=>progDeptBucket(p)===d);openModal('<button class="x" onclick="closeModal()">✕</button><h3>📊 '+d+' — Proposed vs Actual</h3><p style="color:var(--muted);font-size:13px">FY '+fy+' — Proposed <b>'+deptProposedCount(d)+'</b> · Actual <b>'+ps.length+'</b></p><div class="mt">'+(ps.length?'<div style="overflow:auto;max-height:48vh"><table><thead><tr><th>Programme</th><th>Target Group</th><th>Dates</th><th style="text-align:right">Participants</th><th style="text-align:right">Gain Ratio</th></tr></thead><tbody>'+ps.map(p=>{const g=gainRatio(p.id);return '<tr><td><span class="pill">'+p.id+'</span> '+p.name+'</td><td>'+tgChips(pTG(p),3)+'</td><td style="font-size:12px">'+fmtDate(p.start)+' → '+fmtDate(endOf(p))+'</td><td style="text-align:right"><b>'+partCount(p)+'</b></td><td style="text-align:right">'+(g.ok?(g.gr*100).toFixed(2)+'%':'—')+'</td></tr>';}).join('')+'</tbody></table></div>':'<div class="empty">No programmes conducted.</div>')+'</div>');}
function claimsDrillBud(l){const d=deptKeyFromLabel(l);const it=proposedList().filter(x=>x.dept===d);let tA=0,tU=0;it.forEach(x=>{const b=pbGet(x);tA+=+b.approved||0;tU+=+b.utilized||0;});openModal('<button class="x" onclick="closeModal()">✕</button><h3>💰 '+d+' — Approved vs Utilized</h3><p style="color:var(--muted);font-size:13px">Approved <b>'+inr(tA)+'</b> · Utilized <b>'+inr(tU)+'</b>'+(tA?' ('+Math.round(tU/tA*100)+'%)':'')+'</p><div class="mt">'+(it.length?'<div style="overflow:auto;max-height:52vh"><table><thead><tr><th>Proposed Programme</th><th style="text-align:center">No.</th><th style="text-align:right">Approved</th><th style="text-align:right">Utilized</th></tr></thead><tbody>'+it.map(x=>{const b=pbGet(x);return '<tr><td>'+x.name+'</td><td style="text-align:center">'+x.count+'</td><td style="text-align:right">'+inr(+b.approved||0)+'</td><td style="text-align:right">'+inr(+b.utilized||0)+'</td></tr>';}).join('')+'</tbody><tfoot><tr><td colspan="2">Total</td><td style="text-align:right">'+inr(tA)+'</td><td style="text-align:right">'+inr(tU)+'</td></tr></tfoot></table></div>':'<div class="empty">None.</div>')+'</div>');}
function viewProposed(){const ce=(ROLE==='Admin');const ds=proposedDepts();let body='',grand=0;ds.forEach(d=>{const it=proposedList().map((x,gi)=>({...x,gi})).filter(x=>x.dept===d);const c=it.reduce((s,x)=>s+(+x.count||0),0);grand+=c;body+='<div class="deptgrp"><div class="hd"><span>'+(DEPT_ABBR[d]||d)+' — '+d+'</span><span>'+c+' programme(s)</span></div><div style="overflow:auto"><table><thead><tr><th>Proposed Programme</th><th style="min-width:190px">🎯 Target Group</th><th style="text-align:center">Days</th><th style="text-align:center">No.</th>'+(ce?'<th></th>':'')+'</tr></thead><tbody>'+it.map(x=>'<tr><td>'+x.name+'</td><td>'+tgChips(x.tg)+'</td><td style="text-align:center">'+(x.days||'—')+'</td><td style="text-align:center"><b>'+x.count+'</b></td>'+(ce?'<td style="white-space:nowrap"><button class="btn sm sec" onclick="proposedForm('+x.gi+')">✏️</button> <button class="btn sm danger" onclick="delProposed('+x.gi+')">🗑️</button></td>':'')+'</tr>').join('')+'</tbody></table></div></div>';});
 openModal('<button class="x" onclick="closeModal()">✕</button><div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap"><h3>📋 Proposed Training Programmes</h3>'+(ce?'<button class="btn sm" onclick="proposedForm(-1)">+ Add Programme</button>':'')+'</div><p style="color:var(--muted);font-size:13px;margin-top:6px">Total proposed: <b>'+grand+'</b> programme(s).'+(ce?'':' <span class="sortnote">View only.</span>')+'</p><div class="mt">'+body+'</div>',true);}
function proposedForm(gi){if(ROLE!=='Admin'){toast('Only Admin can edit proposed programmes');return;}const ed=gi>=0;const x=ed?proposedList()[gi]:{dept:'Department of Supervision',name:'',days:3,count:1,tg:[]};const ds=Object.keys(DEPT_ABBR).filter(d=>d!=='Others');
 openModal('<button class="x" onclick="closeModal()">✕</button><h3>'+(ed?'Edit':'Add')+' Proposed Programme</h3>'+
 '<div class="mt"><label>Sponsoring Department</label><select id="pp_dept">'+ds.map(d=>'<option '+(x.dept===d?'selected':'')+'>'+d+'</option>').join('')+'</select></div>'+
 '<div class="mt"><label>Name of Programme</label><input id="pp_name" value="'+esc(x.name)+'"></div>'+
 '<div class="row mt"><div class="col"><label>Duration (days)</label><input id="pp_days" type="number" min="0" value="'+(x.days!=null?x.days:'')+'"></div><div class="col"><label>No. of Programmes</label><input id="pp_count" type="number" min="0" value="'+(x.count!=null?x.count:'')+'"></div></div>'+
 '<div class="mt"><label>🎯 Target Group <span style="font-weight:400;color:var(--muted)">(select one or more · add your own if not listed)</span></label>'+tgPicker('pp_tg',x.tg||[])+'</div>'+
 '<button class="btn mt" style="width:100%" onclick="saveProposed('+gi+')">'+(ed?'Save Changes':'Add Programme')+'</button>',true);}
function saveProposed(gi){const d=$('#pp_dept').value,n=$('#pp_name').value.trim();if(!n){toast('Enter a programme name');return;}
 const rec={dept:d,name:n,days:Math.max(0,+($('#pp_days').value||0)),count:Math.max(0,+($('#pp_count').value||0)),tg:TGSEL.slice()};
 if(gi>=0){const old=proposedList()[gi];const ok=pbKey(old),nk=pbKey(rec);if(ok!==nk&&DB.claims.pbudgets[ok]){DB.claims.pbudgets[nk]=DB.claims.pbudgets[ok];delete DB.claims.pbudgets[ok];}
  DB.claims.proposed[gi]=rec;
  DB.programmes.forEach(p=>{const key=(pType(p)==='Customised')?'Customised':pDept(p);if(key===old.dept&&p.name===old.name){p.name=rec.name;p.tg=rec.tg.slice();}});}
 else DB.claims.proposed.push(rec);
 save();toast('Saved ✓');viewProposed();vClaims();}
function delProposed(gi){const x=proposedList()[gi];if(!x)return;if(!confirm('Delete "'+x.name+'"?'))return;delete DB.claims.pbudgets[pbKey(x)];DB.claims.proposed.splice(gi,1);save();toast('Deleted');viewProposed();vClaims();}
function budgetModal(){const fy=currentFY();const ds=proposedDepts();let body='',gA=0,gU=0;
 ds.forEach(d=>{const it=proposedList().map((x,gi)=>({...x,gi})).filter(x=>x.dept===d);let dA=0,dU=0;it.forEach(x=>{const b=pbGet(x);dA+=+b.approved||0;dU+=+b.utilized||0;});gA+=dA;gU+=dU;
 body+='<div class="deptgrp"><div class="hd"><span>'+(DEPT_ABBR[d]||d)+' — '+d+'</span><span>Approved '+inr(dA)+' · Utilized '+inr(dU)+'</span></div><div style="overflow:auto"><table><thead><tr><th>Proposed Programme</th><th style="text-align:center">Days</th><th style="text-align:center">No.</th><th style="text-align:right">Approved (₹)</th><th style="text-align:right">Utilized (₹)</th></tr></thead><tbody>'+it.map(x=>{const b=pbGet(x);return '<tr><td style="font-size:13px">'+x.name+'</td><td style="text-align:center">'+(x.days||'—')+'</td><td style="text-align:center"><b>'+x.count+'</b></td><td style="text-align:right"><input class="bt-in" id="pa_'+x.gi+'" type="number" min="0" value="'+(b.approved!=null?b.approved:'')+'" oninput="recalcBudgetTotals()"></td><td style="text-align:right"><input class="bt-in" id="pu_'+x.gi+'" type="number" min="0" value="'+(b.utilized!=null?b.utilized:'')+'" oninput="recalcBudgetTotals()"></td></tr>';}).join('')+'</tbody></table></div></div>';});
 openModal('<button class="x" onclick="closeModal()">✕</button><h3>💰 Enter / Update Budget (FY '+fy+')</h3><p style="color:var(--muted);font-size:13px;margin-top:6px">Budget is sanctioned at the start of the year against the <b>proposed</b> programmes.</p><div class="notice" id="bt_grand">Grand total — Approved <b>'+inr(gA)+'</b> · Utilized <b>'+inr(gU)+'</b></div><div class="mt" style="max-height:52vh;overflow:auto">'+body+'</div><button class="btn mt" style="width:100%" onclick="saveBudgets()">Save Budget</button>',true);}
function recalcBudgetTotals(){let gA=0,gU=0;proposedList().forEach((x,gi)=>{const a=document.getElementById('pa_'+gi),u=document.getElementById('pu_'+gi);if(a&&a.value!=='')gA+=Math.max(0,+a.value);if(u&&u.value!=='')gU+=Math.max(0,+u.value);});const e=document.getElementById('bt_grand');if(e)e.innerHTML='Grand total — Approved <b>'+inr(gA)+'</b> · Utilized <b>'+inr(gU)+'</b>';}
function saveBudgets(){proposedList().forEach((x,gi)=>{const a=document.getElementById('pa_'+gi),u=document.getElementById('pu_'+gi);if(!a&&!u)return;const ap=(a&&a.value!=='')?Math.max(0,+a.value):0,ut=(u&&u.value!=='')?Math.max(0,+u.value):0;const k=pbKey(x);if(ap||ut)DB.claims.pbudgets[k]={approved:ap,utilized:ut};else delete DB.claims.pbudgets[k];});save();closeModal();toast('Budget saved ✓');vClaims();}
function claimsFilterBar(){return '<div class="card" style="padding:14px 16px"><div class="row" style="align-items:flex-end"><div class="col" style="min-width:200px"><label>🔍 Search programme</label><input id="cf_search" value="'+esc(CFILT.search)+'" oninput="CFILT.search=this.value;renderClaimsEvals()"></div><div class="col" style="max-width:260px"><label>🏛️ Sponsor Department</label><select onchange="CFILT.dept=this.value;renderClaimsEvals()"><option '+(CFILT.dept==='All'?'selected':'')+'>All</option>'+usedDepts().map(d=>'<option '+(CFILT.dept===d?'selected':'')+'>'+d+'</option>').join('')+'</select></div><div class="col" style="max-width:180px"><label>🗂️ Type</label><select onchange="CFILT.ptype=this.value;renderClaimsEvals()"><option '+(CFILT.ptype==='All'?'selected':'')+'>All</option>'+PROG_TYPES.map(t=>'<option '+(CFILT.ptype===t?'selected':'')+'>'+t+'</option>').join('')+'</select></div></div></div>';}
function claimsFilteredProgs(){const fy=currentFY();let l=progsInFY(fy);if(CFILT.dept!=='All')l=l.filter(p=>pDept(p)===CFILT.dept);if(CFILT.ptype!=='All')l=l.filter(p=>pType(p)===CFILT.ptype);if(CFILT.search.trim()){const s=CFILT.search.trim().toLowerCase();l=l.filter(p=>p.name.toLowerCase().includes(s)||(''+p.id).toLowerCase().includes(s));}return sortByDate(l,'new');}
function vClaims(){const fy=currentFY();const ps=progsInFY(fy);const isAdmin=(ROLE==='Admin');const gen=(ROLE==='General');
 const ds=proposedDepts();const ac={};ps.forEach(p=>{const d=progDeptBucket(p);ac[d]=(ac[d]||0)+1;});
 Object.keys(ac).forEach(d=>{if(ds.indexOf(d)<0)ds.push(d);});
 const pa=ds.map(d=>({key:(DEPT_ABBR[d]||d),label:(DEPT_ABBR[d]||d),sub:d,a:deptProposedCount(d),b:ac[d]||0})).filter(r=>r.a||r.b);
 const bu=ds.map(d=>({key:(DEPT_ABBR[d]||d),label:(DEPT_ABBR[d]||d),sub:d,a:deptApproved(d),b:deptUtilized(d)})).filter(r=>r.a||r.b);
 const tA=bu.reduce((s,r)=>s+r.a,0),tU=bu.reduce((s,r)=>s+r.b,0);
 const ready=ps.filter(p=>perReady(p.id).ok).length;
 let html='<div class="page-h"><div><h2>Claims Data</h2><p>Proposed vs Actual programmes &amp; Budget utilisation — department-wise</p></div>'+fySelector('claims')+'</div>';
 if(gen)html+='<div class="notice">👁️ Signed in as a <b>General</b> user — double-click any department column for the detailed break-up, or open the list of proposed programmes.</div>';
 html+='<div class="card"><div class="chart-title">📊 Proposed vs Actual Programmes (Department-wise)<span style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span style="font-weight:400;color:var(--muted);font-size:11px">Proposed '+pa.reduce((s,r)=>s+r.a,0)+' · Actual '+pa.reduce((s,r)=>s+r.b,0)+'</span><button class="btn sm sec" onclick="viewProposed()">📋 Proposed Programmes</button></span></div>'+vGroupedBar(pa,'Proposed','#7b2d8e','Actual','#1f7a3f',x=>x,'claimsDrillPA')+'</div>'+
 '<div class="card"><div class="chart-title">💰 Approved vs Utilized Budget (Department-wise)<span>'+(isAdmin?'<button class="btn sm sec" onclick="budgetModal()">✏️ Enter / Update Budget</button>':'')+'</span></div><p style="font-size:12px;color:var(--muted);margin:-6px 0 10px">Approved '+inr(tA)+' · Utilized '+inr(tU)+(tA?' ('+Math.round(tU/tA*100)+'% utilised)':'')+'</p>'+(bu.length?vGroupedBar(bu,'Approved','#2e86c1','Utilized','#e67e22',inr,'claimsDrillBud'):'<div class="empty">No budget entered.</div>')+'</div>';
 if(!gen)html+='<div class="card"><div class="chart-title">📄 Programme Evaluation Reports <span style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span style="font-weight:400;color:var(--muted);font-size:11.5px">'+ready+' of '+ps.length+' available</span><button class="btn sm sec" onclick="downloadAllPER()">⬇️ Download all (Word)</button></span></div><div class="notice">Reports are compiled from the registration, entry/exit test and feedback data of each programme. <b>Every participant comment is carried into the report in full</b>; non-responses such as Nil, NA, No or None are left out.</div>'+claimsFilterBar()+'<div id="claims_evals"></div></div>';
 $('#view').innerHTML=html;if(!gen)renderClaimsEvals();}
function renderClaimsEvals(){const box=document.getElementById('claims_evals');if(!box)return;const key='claims|per';const st=tsGet(key);
 let l=claimsFilteredProgs().map(p=>{const s=perReady(p.id);const g=gainRatio(p.id);const pend=pendingCount(p.id,'Entry')+pendingCount(p.id,'Exit')+pendingCount(p.id,'Feedback');const dp=dupInfo(p.id,'feedback').dup;return {p:p,name:p.name,id:p.id,tg:pTG(p).join(', '),data:s.reg+s.tests+s.fb,reg:s.reg,tests:s.tests,fb:s.fb,ok:s.ok,pend:pend,dup:dp,gr:g.ok?+(g.gr*100).toFixed(2):''};});
 if(st)l=sortRows(l,st.col,st.dir,(r,c)=>[r.name,r.tg,r.data,r.pend,r.gr][c]);
 box.innerHTML=l.length?'<div style="overflow:auto"><table><thead><tr>'+sortableTH(key,0,'Programme')+sortableTH(key,1,'Target Group')+sortableTH(key,2,'Data collected','style="text-align:center"')+sortableTH(key,3,'Pending','style="text-align:center"')+sortableTH(key,4,'Gain Ratio','style="text-align:right"')+'<th></th></tr></thead><tbody>'+l.map(r=>{const p=r.p;
 const act=r.ok?('<button class="btn sm sec" onclick="previewPER(\''+p.id+'\')">👁️ Preview</button> <button class="btn sm" onclick="downloadPER(\''+p.id+'\')">⬇️ Word</button>'):'<span style="color:var(--muted);font-size:12px">Awaiting data</span>';
 return '<tr><td><span class="pill">'+p.id+'</span> '+esc(p.name)+(r.dup?' <span class="tag a">⚠️ '+r.dup+' duplicate(s)</span>':'')+'<br><small style="color:var(--muted)">'+fmtDate(p.start)+' → '+fmtDate(endOf(p))+'</small></td><td>'+tgChips(pTG(p),3)+'</td><td style="text-align:center;font-size:11.5px">📝 '+r.reg+' · 🧪 '+r.tests+' · ⭐ '+r.fb+'</td><td style="text-align:center">'+(r.pend?('<span class="tag a">'+r.pend+'</span>'):'<span class="tag g">✓</span>')+'</td><td style="text-align:right">'+(r.gr!==''?'<b style="color:var(--green-d)">'+r.gr+'%</b>':'—')+'</td><td style="white-space:nowrap">'+act+'</td></tr>';}).join('')+'</tbody></table></div>':'<div class="empty">No programmes match.</div>';const el=document.getElementById('cf_search');if(el&&CFILT.search){el.focus();el.setSelectionRange(el.value.length,el.value.length);}}
const REG_COLS=['Name','Designation','Organisation Type','Gender','Category','Name of the Organisation / Institute / Bank','State / Union Territory','Age (in Years)','Mobile Number','e-mail ID','Nature of present duties and assignments','Name of contact person (emergency)','Mobile number of contact person (emergency)'];
function vExport(){const fy=currentFY();const ps=DB.programmes.slice().sort((a,b)=>(''+b.start).localeCompare(''+a.start));if(EXPPROG&&!prog(EXPPROG))EXPPROG='';if(!EXPPROG&&ps.length)EXPPROG=ps[0].id;
 const t=dupTotals('feedback'),tr=dupTotals('registration');
 const warn=(t.rows||tr.rows)?('<div class="notice amber">⚠️ Duplicate responses are present ('+(t.rows?t.rows+' feedback':'')+((t.rows&&tr.rows)?', ':'')+(tr.rows?tr.rows+' registration':'')+' row(s)) and will inflate the exported figures. '+(t.rows?'<button class="btn sm warn" style="margin-left:6px" onclick="dupCleanAll(\'feedback\')">🧹 Clean feedback</button>':'')+(tr.rows?'<button class="btn sm warn" style="margin-left:6px" onclick="dupCleanAll(\'registration\')">🧹 Clean registrations</button>':'')+'</div>'):'';
 $('#view').innerHTML='<div class="page-h"><div><h2>Data Export</h2><p>Download master data as spreadsheet (CSV — opens in Excel)</p></div>'+fySelector('export')+'</div>'+warn+'<div class="card"><div class="chart-title">📦 By Financial Year — FY '+fy+'<span style="font-weight:400;color:var(--muted);font-size:12px">'+progsInFY(fy).length+' programme(s) · '+regInFY(fy).length+' registration(s) · '+fbInFY(fy).length+' feedback</span></div><div class="row"><button class="btn sec" onclick="exPart()">⬇️ Participant Master</button><button class="btn sec" onclick="exProg()">⬇️ Programme Details</button><button class="btn sec" onclick="exFeed()">⬇️ Feedback (all questions)</button><button class="btn sec" onclick="exComments()">💬 Participant Comments</button><button class="btn sec" onclick="exFeedSummary()">⬇️ Feedback Summary</button><button class="btn sec" onclick="exScore()">⬇️ Assessment Scores</button><button class="btn warn" onclick="exAllSubmission()">🔔 Submission Status (all programmes)</button><button class="btn sec" onclick="exGain()">⬇️ Gain Ratio</button><button class="btn sec" onclick="exProposed()">⬇️ Proposed Programmes</button><button class="btn sec" onclick="exBudget()">⬇️ Budget</button><button class="btn sec" onclick="exFaculty()">⬇️ Faculty Members</button><button class="btn dangersec" onclick="exBlacklist()">⛔ Blacklisted Participants</button><button class="btn" onclick="downloadAllPER()">📄 All Evaluation Reports (Word)</button></div></div><div class="card" style="border-left:4px solid var(--purple)"><div class="chart-title">🎯 By Programme Name</div><div class="row" style="align-items:flex-end;margin-bottom:14px"><div class="col" style="min-width:260px"><label>Select Programme</label><select onchange="EXPPROG=this.value;vExport()">'+ps.map(p=>'<option value="'+p.id+'" '+(EXPPROG===p.id?'selected':'')+'>'+p.id+' — '+p.name+'</option>').join('')+'</select></div></div><div class="row"><button class="btn sec" onclick="exPartProg()">⬇️ Participants</button><button class="btn sec" onclick="exFeedProg()">⬇️ Feedback</button><button class="btn sec" onclick="exScoreProg()">⬇️ Assessment Scores</button><button class="btn warn" onclick="exSubmissionStatus(EXPPROG,\'test\')">🔔 Test Submission Status</button><button class="btn warn" onclick="exSubmissionStatus(EXPPROG,\'feedback\')">🔔 Feedback Submission Status</button><button class="btn sec" onclick="previewPER(EXPPROG)">📄 Evaluation Report</button></div></div>';}
function exAllSubmission(){const fy=currentFY();
 let rows=[['Programme Code','Programme','Dates','Registered','Entry submitted','Entry pending','Exit submitted','Exit pending','Feedback submitted','Feedback pending','Names yet to take Entry','Names yet to take Exit','Names yet to give Feedback']];
 progsInFY(fy).forEach(p=>{const e=submissionStatus(p.id,'Entry'),x=submissionStatus(p.id,'Exit'),f=submissionStatus(p.id,'Feedback');
  rows.push([p.id,p.name,fmtDate(p.start)+' to '+fmtDate(endOf(p)),e.total,
   e.submitted.length,e.pending.length,x.submitted.length,x.pending.length,f.submitted.length,f.pending.length,
   e.pending.map(y=>y.name).join(' | '),x.pending.map(y=>y.name).join(' | '),f.pending.map(y=>y.name).join(' | ')]);});
 csv(rows,'Submission_Status_FY'+fy+'.csv');}
function exPart(){const fy=currentFY();csv([['Programme','FY'].concat(REG_COLS).concat(['Blacklisted','Blacklist Reason'])].concat(regInFY(fy).map(r=>{const b=blFind(r['Name'],r['Mobile Number']);return [progName(r.prog),fy].concat(REG_COLS.map(c=>r[c]==null?'':r[c])).concat([b?'Yes':'No',b?b.reason:'']);})),'Participant_Master_FY'+fy+'.csv')}
function exProg(){const fy=currentFY();csv([['Code','Name','Type','Sponsor Department','Target Group','PD','Co-PD','Mode','Start','End','Days','Participants','Entry pending','Exit pending','Feedback pending','Duplicate feedback rows','Gain Ratio %']].concat(progsInFY(fy).map(p=>{const g=gainRatio(p.id);return [p.id,p.name,pType(p),pDept(p),pTG(p).join('; '),p.pd,p.copd,p.mode,p.start,endOf(p),p.days,partCount(p),pendingCount(p.id,'Entry'),pendingCount(p.id,'Exit'),pendingCount(p.id,'Feedback'),dupInfo(p.id,'feedback').dup,g.ok?(g.gr*100).toFixed(2):''];})),'Programme_Details_FY'+fy+'.csv')}
function exProposed(){csv([['Sponsoring Department','Proposed Programme','Target Group','Duration (days)','No. of Programmes']].concat(proposedList().map(x=>[x.dept,x.name,(x.tg||[]).join('; '),x.days,x.count])),'Proposed_Programmes.csv')}
function exFeed(){const fy=currentFY();let rows=[];const seen=[];progsInFY(fy).forEach(p=>{(DB.forms[p.id].feedback||[]).forEach(f=>{if(seen.indexOf(f.label)<0)seen.push(f.label);});});
 rows.push(['Programme Code','Programme'].concat(seen));
 progsInFY(fy).forEach(p=>{(DB.responses[p.id].feedback||[]).forEach(r=>{const a=r.answers||{};rows.push([p.id,p.name].concat(seen.map(c=>a[c]==null?'':a[c])));});});csv(rows,'Feedback_AllQuestions_FY'+fy+'.csv')}
function exComments(){const fy=currentFY();let rows=[['Programme Code','Programme','Question','Comment','No. of participants']];
 progsInFY(fy).forEach(p=>{
  const F=(DB.responses[p.id].feedback||[]).map(r=>r.answers||{});if(!F.length)return;
  (DB.forms[p.id].feedback||[]).forEach(f=>{
   if(f.type==='Participant'||(f.options&&f.options.length))return;
   commentList(F,f.label).forEach(c=>rows.push([p.id,p.name,f.label,c.text,c.n]));});});
 csv(rows,'Participant_Comments_FY'+fy+'.csv');}
function exFeedSummary(){const fy=currentFY();const F=fbInFY(fy);let rows=[['Question','Option','Responses','%']];const add=(q,o)=>{const m=orderBy(countIn(F,q,o),o);const t=Object.values(m).reduce((a,b)=>a+b,0)||1;Object.entries(m).forEach(([k,v])=>rows.push([q,k,v,Math.round(v/t*100)+'%']));};FB_RATE_Q.forEach(q=>add(q,RATE4));FB_UTIL_Q.forEach(q=>add(q,UTIL3));add('Comments on the duration of the programme: Whether Adequate?',YESNO);add('Comments on Infrastructure facilities – Boarding',INFRA4);add('Comments on Infrastructure facilities - Lodging',INFRA4);FB_SESSIONS.forEach(s=>add(s,RATE4));csv(rows,'Feedback_Summary_FY'+fy+'.csv')}
function exScore(){const fy=currentFY();let rows=[['Programme Code','Programme','Participant','Entry Score','Exit Score','Maximum Marks','Individual Gain']];progsInFY(fy).forEach(p=>{testsByName(p.id).forEach(x=>{rows.push([p.id,p.name,x.name,x.entry?x.entry.score:'',x.exit?x.exit.score:'',(x.entry&&x.entry.total)||(x.exit&&x.exit.total)||'',(x.entry&&x.exit)?(x.exit.score-x.entry.score):'']);});});csv(rows,'Assessment_Scores_FY'+fy+'.csv')}
function exGain(){const fy=currentFY();let rows=[['Code','Programme','Target Group','Entry n','Entry Weighted Avg','Exit n','Exit Weighted Avg','Gain Ratio %']];progsInFY(fy).forEach(p=>{const g=gainRatio(p.id);rows.push([p.id,p.name,pTG(p).join('; '),g.ok?g.E.total:'',g.ok?g.E.avg.toFixed(2):'',g.ok?g.X.total:'',g.ok?g.X.avg.toFixed(2):'',g.ok?(g.gr*100).toFixed(2):'']);});csv(rows,'Gain_Ratio_FY'+fy+'.csv')}
function exBudget(){let rows=[['Department','Proposed Programme','Target Group','Days','No.','Approved','Utilized']];proposedList().forEach(x=>{const b=pbGet(x);rows.push([x.dept,x.name,(x.tg||[]).join('; '),x.days,x.count,+b.approved||0,+b.utilized||0]);});csv(rows,'Budget_Proposed.csv')}
function exFaculty(){let rows=[['Name','Designation','e-mail','Mobile','Area of Expertise','Status']];facultyList().forEach(f=>rows.push([f.name,f.desig||'',f.email||'',f.mobile||'',f.expertise||'',f.status||'Active']));csv(rows,'Faculty_Members.csv')}
function exPartProg(){const p=prog(EXPPROG);if(!p)return;const cols=DB.forms[p.id].registration.map(f=>f.label);csv([['Programme Code'].concat(cols).concat(['Entry taken','Exit taken','Feedback given','Blacklisted'])].concat(DB.responses[p.id].registration.map(r=>{const a=r.answers||{};const k=normName(aName(a));const de=submittedKeys(p.id,'Entry').has(k),dx=submittedKeys(p.id,'Exit').has(k),df=submittedKeys(p.id,'Feedback').has(k);return [p.id].concat(cols.map(c=>a[c]==null?'':a[c])).concat([de?'Yes':'No',dx?'Yes':'No',df?'Yes':'No',isBlacklisted(aName(a),aMobile(a))?'Yes':'No']);})),'Participants_'+p.id+'.csv')}
function exFeedProg(){const p=prog(EXPPROG);if(!p)return;const cols=(DB.forms[p.id].feedback||[]).map(f=>f.label);csv([['Programme Code'].concat(cols)].concat(DB.responses[p.id].feedback.map(r=>{const a=r.answers||{};return [p.id].concat(cols.map(c=>a[c]==null?'':a[c]));})),'Feedback_'+p.id+'.csv')}
function exScoreProg(){const p=prog(EXPPROG);if(!p)return;let rows=[['Programme Code','Participant','Entry Score','Exit Score','Maximum Marks','Individual Gain']];testsByName(p.id).forEach(x=>rows.push([p.id,x.name,x.entry?x.entry.score:'',x.exit?x.exit.score:'',(x.entry&&x.entry.total)||(x.exit&&x.exit.total)||'',(x.entry&&x.exit)?(x.exit.score-x.entry.score):'']));csv(rows,'Scores_'+p.id+'.csv')}
function setUSub(t){USUB=t;vUsers();}
function vUsers(){const tabs=['Users','Faculty Members','Target Groups'];const head='<div class="page-h"><div><h2>User Management</h2><p>Role-based access, Faculty register, Target Group master &amp; data health</p></div>'+(USUB==='Users'?'<button class="btn" onclick="userForm()">+ Add User</button>':(USUB==='Faculty Members'?'<button class="btn" onclick="facForm(-1)">+ Add Faculty Member</button>':(USUB==='Target Groups'?'<button class="btn" onclick="tgMasterAdd()">+ Add Target Group</button>':'')))+'</div><div class="subnav">'+tabs.map(t=>'<button class="'+(USUB===t?'active':'')+'" onclick="setUSub(\''+t+'\')">'+t+'</button>').join('')+'</div>';
 if(USUB==='Target Groups'){const list=tgMaster();
  $('#view').innerHTML=head+'<div class="notice">These groups appear in the <b>Target Group</b> selector when adding a proposed programme in Claims Data.</div><div class="card"><div class="chart-title">🎯 Target Groups ('+list.length+')</div><div style="overflow:auto"><table><thead><tr><th>Target Group</th><th style="text-align:center">Used in programmes</th><th></th></tr></thead><tbody>'+list.map(t=>{const n=DB.programmes.filter(p=>pTG(p).indexOf(t)>=0).length;const np=proposedList().filter(x=>(x.tg||[]).indexOf(t)>=0).length;return '<tr><td><span class="tgchip" style="font-size:12.5px">'+t+'</span></td><td style="text-align:center">'+n+' actual · '+np+' proposed</td><td style="white-space:nowrap"><button class="btn sm danger" onclick="tgMasterDel(\''+t.replace(/'/g,"\\'")+'\')">🗑️ Remove</button></td></tr>';}).join('')+'</tbody></table></div></div>';return;}
 if(USUB==='Faculty Members'){const key='users|faculty';const st=tsGet(key);let f=facultyList().map((x,i)=>({...x,i}));
  if(st)f=sortRows(f,st.col,st.dir,(r,c)=>[r.name,r.desig,r.email,r.expertise,r.status][c]);
  $('#view').innerHTML=head+'<div class="notice">Faculty members appear automatically in the <b>PD</b> and <b>Co-PD</b> dropdowns. <span class="sortnote">Click any column heading to sort.</span></div><div class="card"><div class="chart-title">🎓 Faculty Members ('+f.length+')<button class="btn sm sec" onclick="exFaculty()">⬇️ Export</button></div><div style="overflow:auto"><table><thead><tr>'+sortableTH(key,0,'Name')+sortableTH(key,1,'Designation')+sortableTH(key,2,'Contact')+sortableTH(key,3,'Expertise')+sortableTH(key,4,'Status')+'<th></th></tr></thead><tbody>'+f.map(x=>{const a=(x.status!=='Inactive');return '<tr style="'+(a?'':'opacity:.6')+'"><td><b>'+esc(x.name)+'</b></td><td>'+esc(x.desig||'—')+'</td><td style="font-size:12px">'+esc(x.email||'—')+'<br>'+esc(x.mobile||'—')+'</td><td style="font-size:12.5px">'+esc(x.expertise||'—')+'</td><td><span class="tag '+(a?'g':'o')+'">'+(a?'🟢 Active':'⚪ Inactive')+'</span></td><td style="white-space:nowrap;display:flex;gap:6px"><button class="btn sm '+(a?'ghost':'sec')+'" onclick="toggleFacStatus('+x.i+')">'+(a?'Deactivate':'Activate')+'</button><button class="btn sm sec" onclick="facForm('+x.i+')">✏️</button><button class="btn sm danger" onclick="delFacAsk('+x.i+')">🗑️</button></td></tr>';}).join('')+'</tbody></table></div></div>';return;}
 $('#view').innerHTML=head+'<div class="card"><div style="overflow:auto"><table><thead><tr><th>User ID</th><th>Name</th><th>Role</th><th>Status</th><th></th></tr></thead><tbody>'+DB.users.map((u,i)=>{const a=(u.status!=='Inactive');return '<tr style="'+(a?'':'opacity:.6')+'"><td><span class="pill">'+u.uid+'</span></td><td><b>'+u.name+'</b></td><td><span class="tag '+(u.role==='Admin'?'g':u.role==='PD/Co-PD'?'p':'o')+'">'+u.role+'</span></td><td><span class="tag '+(a?'g':'o')+'">'+(a?'🟢 Active':'⚪ Inactive')+'</span></td><td style="white-space:nowrap;display:flex;gap:6px"><button class="btn sm '+(a?'ghost':'sec')+'" onclick="toggleUserStatus('+i+')">'+(a?'Deactivate':'Activate')+'</button><button class="btn sm sec" onclick="userForm('+i+')">✏️</button><button class="btn sm danger" onclick="delUserAsk('+i+')">🗑️</button></td></tr>';}).join('')+'</tbody></table></div></div>';}
function tgMasterAdd(){openModal('<button class="x" onclick="closeModal()">✕</button><h3>🎯 Add Target Group</h3><div class="mt"><label>Name of the Target Group</label><input id="tgm_name" placeholder="e.g. Cooperative Societies"></div><button class="btn mt" style="width:100%" onclick="tgMasterSave()">Add Group</button>');}
function tgMasterSave(){const v=$('#tgm_name').value.trim();if(!v){toast('Enter a name');return;}if(!tgAddMaster(v)){toast('"'+v+'" already exists');return;}closeModal();toast('Target group added ✓');vUsers();}
function tgMasterDel(t){const n=DB.programmes.filter(p=>pTG(p).indexOf(t)>=0).length+proposedList().filter(x=>(x.tg||[]).indexOf(t)>=0).length;if(n&&!confirm('"'+t+'" is used in '+n+' programme(s). Remove it from the master list anyway?'))return;const c=DB.claims.tgroups||[];const i=c.indexOf(t);if(i>=0)c.splice(i,1);save();toast('Removed from master list');vUsers();}
function facForm(idx){const ed=(idx!=null&&idx>=0);const f=ed?facultyList()[idx]:{name:'',desig:'Faculty Member',email:'',mobile:'',expertise:'',status:'Active'};const c=(f.status!=='Inactive')?'Active':'Inactive';openModal('<button class="x" onclick="closeModal()">✕</button><h3>🎓 '+(ed?'Edit':'Add')+' Faculty Member</h3><div class="mt"><label>Name</label><input id="fc_name" value="'+esc(f.name)+'"></div><div class="row mt"><div class="col"><label>Designation</label><input id="fc_desig" list="fc_dl" value="'+esc(f.desig)+'"><datalist id="fc_dl">'+FAC_DESIGS.map(d=>'<option value="'+d+'"></option>').join('')+'</datalist></div><div class="col"><label>Status</label><select id="fc_status">'+['Active','Inactive'].map(s=>'<option '+(c===s?'selected':'')+'>'+s+'</option>').join('')+'</select></div></div><div class="row mt"><div class="col"><label>e-mail ID</label><input id="fc_email" value="'+esc(f.email)+'"></div><div class="col"><label>Mobile</label><input id="fc_mobile" value="'+esc(f.mobile)+'"></div></div><div class="mt"><label>Area of Expertise</label><input id="fc_exp" value="'+esc(f.expertise)+'"></div><button class="btn mt" style="width:100%" onclick="saveFac('+(ed?idx:-1)+')">'+(ed?'Save Changes':'Add')+'</button>');}
function saveFac(idx){const n=$('#fc_name').value.trim();if(!n){toast('Enter name');return;}const rec={name:n,desig:$('#fc_desig').value.trim()||'Faculty Member',email:$('#fc_email').value.trim(),mobile:$('#fc_mobile').value.trim(),expertise:$('#fc_exp').value.trim(),status:$('#fc_status').value};const old=(idx>=0)?facultyList()[idx].name:null;if(idx>=0){DB.faculty[idx]=rec;if(old&&old!==n)DB.programmes.forEach(p=>{if(p.pd===old)p.pd=n;if(p.copd===old)p.copd=n;});}else DB.faculty.push(rec);save();closeModal();toast('Saved ✓');vUsers();}
function toggleFacStatus(i){const f=DB.faculty[i];if(!f)return;f.status=(f.status!=='Inactive')?'Inactive':'Active';save();vUsers();}
function delFacAsk(i){const f=facultyList()[i];if(f&&confirm('Delete '+f.name+'?')){DB.faculty.splice(i,1);save();toast('Deleted');vUsers();}}
function toggleUserStatus(i){const u=DB.users[i];if(!u)return;u.status=(u.status!=='Inactive')?'Inactive':'Active';save();vUsers();}
function userForm(idx){const ed=(idx!=null&&idx>=0);const u=ed?DB.users[idx]:{uid:'',name:'',role:'Admin',status:'Active'};const c=(u.status!=='Inactive')?'Active':'Inactive';openModal('<button class="x" onclick="closeModal()">✕</button><h3>'+(ed?'Edit User':'Add User')+'</h3><div class="mt"><label>User ID</label><input id="u_id" value="'+esc(u.uid)+'"></div><div class="mt"><label>Name</label><input id="u_name" value="'+esc(u.name)+'"></div><div class="row mt"><div class="col"><label>Role</label><select id="u_role">'+['Admin','PD/Co-PD','General'].map(r=>'<option '+(u.role===r?'selected':'')+'>'+r+'</option>').join('')+'</select></div><div class="col"><label>Status</label><select id="u_status">'+['Active','Inactive'].map(s=>'<option '+(c===s?'selected':'')+'>'+s+'</option>').join('')+'</select></div></div><div class="notice mt" style="font-size:12.5px">👁️ <b>General</b> users can view the Dashboard and the Claims Data charts, including the department break-up and the proposed programmes list.</div><button class="btn mt" style="width:100%" onclick="saveUser('+(ed?idx:-1)+')">'+(ed?'Save Changes':'Add User')+'</button>');}
function saveUser(idx){const id=$('#u_id').value.trim();if(!id){toast('Enter user id');return}const d={uid:id,name:$('#u_name').value||id,role:$('#u_role').value,status:$('#u_status').value};if(idx>=0)DB.users[idx]=d;else DB.users.push(d);save();closeModal();toast('Saved ✓');vUsers();}
function delUserAsk(i){const u=DB.users[i];if(u&&confirm('Delete '+u.name+'?')){DB.users.splice(i,1);save();toast('Deleted');vUsers();}}
window.resetDemo=()=>{localStorage.removeItem(DB_KEY);DB=seed();save();toast('Sample data reloaded');navTo('dashboard')};
