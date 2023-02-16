"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={title:"Ingestion",slug:"/managed-datahub/metadata-ingestion-with-acryl/ingestion",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/metadata-ingestion-with-acryl/ingestion.md"},r="Ingestion",s={unversionedId:"docs/managed-datahub/metadata-ingestion-with-acryl/ingestion",id:"docs/managed-datahub/metadata-ingestion-with-acryl/ingestion",title:"Ingestion",description:"Acryl Metadata Ingestion functions similarly to that in open source DataHub. Sources are configured via the UI Ingestion or via a Recipe, ingestion recipes can be scheduled using your system of choice, and metadata can be pushed from anywhere.",source:"@site/genDocs/docs/managed-datahub/metadata-ingestion-with-acryl/ingestion.md",sourceDirName:"docs/managed-datahub/metadata-ingestion-with-acryl",slug:"/managed-datahub/metadata-ingestion-with-acryl/ingestion",permalink:"/docs/managed-datahub/metadata-ingestion-with-acryl/ingestion",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/metadata-ingestion-with-acryl/ingestion.md",tags:[],version:"current",frontMatter:{title:"Ingestion",slug:"/managed-datahub/metadata-ingestion-with-acryl/ingestion",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/metadata-ingestion-with-acryl/ingestion.md"},sidebar:"overviewSidebar",previous:{title:"Getting Started with Acryl DataHub",permalink:"/docs/managed-datahub/welcome-acryl"},next:{title:"Entity Events API",permalink:"/docs/managed-datahub/datahub-api/entity-events-api"}},l={},c=[{value:"Batch Ingestion",id:"batch-ingestion",level:2},{value:"Step 1: Install DataHub CLI",id:"step-1-install-datahub-cli",level:3},{value:"<strong>Install from Gemfury Private Repository</strong>",id:"install-from-gemfury-private-repository",level:4},{value:"Install from PyPI for OSS Release",id:"install-from-pypi-for-oss-release",level:4},{value:"Step 2: Install Connector Plugins",id:"step-2-install-connector-plugins",level:3},{value:"Step 3: Write a Recipe",id:"step-3-write-a-recipe",level:3},{value:"Step 4: Running Ingestion",id:"step-4-running-ingestion",level:3},{value:"Step 5: Scheduling Ingestion",id:"step-5-scheduling-ingestion",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ingestion"},"Ingestion"),(0,i.kt)("p",null,"Acryl Metadata Ingestion functions similarly to that in open source DataHub. Sources are configured via the",(0,i.kt)("a",{parentName:"p",href:"/docs/ui-ingestion"}," UI Ingestion")," or via a ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"Recipe"),", ingestion recipes can be scheduled using your system of choice, and metadata can be pushed from anywhere.\nThis document will describe the steps required to ingest metadata from your data sources."),(0,i.kt)("h2",{id:"batch-ingestion"},"Batch Ingestion"),(0,i.kt)("p",null,"Batch ingestion involves extracting metadata from a source system in bulk. Typically, this happens on a predefined schedule using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#install-from-pypi"},"Metadata Ingestion "),"framework.\nThe metadata that is extracted includes point-in-time instances of dataset, chart, dashboard, pipeline, user, group, usage, and task metadata."),(0,i.kt)("h3",{id:"step-1-install-datahub-cli"},"Step 1: Install DataHub CLI"),(0,i.kt)("p",null,"Regardless of how you ingest metadata, you'll need your account subdomain and API key handy."),(0,i.kt)("h4",{id:"install-from-gemfury-private-repository"},(0,i.kt)("strong",{parentName:"h4"},"Install from Gemfury Private Repository")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Installing from command line with pip")),(0,i.kt)("p",null,"Determine the version you would like to install and obtain a read access token by requesting a one-time-secret from the Acryl team then run the following command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"python3 -m pip install acryl-datahub==<VERSION> --index-url https://<TOKEN>:@pypi.fury.io/acryl-data/")),(0,i.kt)("h4",{id:"install-from-pypi-for-oss-release"},"Install from PyPI for OSS Release"),(0,i.kt)("p",null,"Run the following commands in your terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python3 -m pip install --upgrade pip wheel setuptools\npython3 -m pip install --upgrade acryl-datahub\npython3 -m datahub version\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: Requires Python 3.6+")),(0,i.kt)("p",null,"Your command line should return the proper version of DataHub upon executing these commands successfully."),(0,i.kt)("h3",{id:"step-2-install-connector-plugins"},"Step 2: Install Connector Plugins"),(0,i.kt)("p",null,"Our CLI follows a plugin architecture. You must install connectors for different data sources individually. For a list of all supported data sources, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#installing-plugins"},"the open source docs"),".\nOnce you've found the connectors you care about, simply install them using ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install"),".\nFor example, to install the ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql")," connector, you can run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pip install --upgrade acryl-datahub[mysql]\n")),(0,i.kt)("h3",{id:"step-3-write-a-recipe"},"Step 3: Write a Recipe"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"Recipes")," are yaml configuration files that serve as input to the Metadata Ingestion framework. Each recipe file define a single source to read from and a single destination to push the metadata.\nThe two most important pieces of the file are the ",(0,i.kt)("em",{parentName:"p"},"source")," and ","_","sin",(0,i.kt)("em",{parentName:"p"},"k configuration blocks.\nThe ","_","source")," configuration block defines where to extract metadata from. This can be an OLTP database system, a data warehouse, or something as simple as a file. Each source has custom configuration depending on what is required to access metadata from the source. To see configurations required for each supported source, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#sources"},"Sources")," documentation.\nThe ",(0,i.kt)("em",{parentName:"p"},"sink")," configuration block defines where to push metadata into. Each sink type requires specific configurations, the details of which are detailed in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#sinks"},"Sinks")," documentation.\nIn Acryl DataHub deployments, you ",(0,i.kt)("em",{parentName:"p"},"must")," use a sink of type ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub-rest"),", which simply means that metadata will be pushed to the REST endpoints exposed by your DataHub instance. The required configurations for this sink are"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"server"),": the location of the REST API exposed by your instance of DataHub"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"token"),": a unique API key used to authenticate requests to your instance's REST API")),(0,i.kt)("p",null,"The token can be retrieved by logging in as admin. You can go to Settings page and generate a Personal Access Token with your desired expiration date.\n",(0,i.kt)("img",{src:n(12128).Z,width:"2348",height:"627"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(49808).Z,width:"2366",height:"752"})),(0,i.kt)("p",null,'To configure your instance of DataHub as the destination for ingestion, set the "server" field of your recipe to point to your Acryl instance\'s domain suffixed by the path ',(0,i.kt)("inlineCode",{parentName:"p"},"/gms"),", as shown below.\nA complete example of a DataHub recipe file, which reads from MySQL and writes into a DataHub instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# example-recipe.yml\n\n# MySQL source configuration\nsource:\n  type: mysql\n  config:\n    username: root\n    password: password\n    host_port: localhost:3306\n\n# Recipe sink configuration.\nsink:\n  type: "datahub-rest"\n  config:\n    server: "https://<your domain name>.acryl.io/gms"\n    token: <Your API key>\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Your API key is a signed JSON Web Token that is valid for 6 months from the date of issuance. Please keep this key secure & avoid sharing it.")),(0,i.kt)("p",null,"If your key is compromised for any reason, please reach out to the Acryl team at ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@acryl.io."},"support@acryl.io."),":::"),(0,i.kt)("h3",{id:"step-4-running-ingestion"},"Step 4: Running Ingestion"),(0,i.kt)("p",null,"The final step requires invoking the DataHub CLI to ingest metadata based on your recipe configuration file.\nTo do so, simply run ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub ingest")," with a pointer to your YAML recipe file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"datahub ingest -c ./example-recipe.yml\n")),(0,i.kt)("h3",{id:"step-5-scheduling-ingestion"},"Step 5: Scheduling Ingestion"),(0,i.kt)("p",null,"Ingestion can either be run in an ad-hoc manner by a system administrator or scheduled for repeated executions. Most commonly, ingestion will be run on a daily cadence.\nTo schedule your ingestion job, we recommend using a job schedule like ",(0,i.kt)("a",{parentName:"p",href:"https://airflow.apache.org/"},"Apache Airflow"),". In cases of simpler deployments, a CRON job scheduled on an always-up machine can also work.\nNote that each source system will require a separate recipe file. This allows you to schedule ingestion from different sources independently or together."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Looking for information on real-time ingestion? Click")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/lineage/airflow"},(0,i.kt)("em",{parentName:"a"},"here")),(0,i.kt)("em",{parentName:"p"},".")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: Real-time ingestion setup is not recommended for an initial POC as it generally takes longer to configure and is prone to inevitable system errors.")))}u.isMDXComponent=!0},12128:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/home-(1)-7cd3a324a88f811cb9cce7bd061e5c4d.png"},49808:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/settings-e8cbefc2cda184c6276ef745938570f8.png"}}]);