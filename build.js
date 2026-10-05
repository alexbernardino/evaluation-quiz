import {mkdirSync,copyFileSync,readFileSync,writeFileSync} from 'node:fs';
mkdirSync('dist',{recursive:true});
for(const file of ['index.html','styles.css','quiz.js','questions.js','state.js','evaluation-quiz-qr.png'])copyFileSync(file,'dist/'+file);
writeFileSync('dist/index.html',readFileSync('dist/index.html','utf8').replace('Local development version','Version: '+new Date().toISOString().replace('T',' ').slice(0,19)+' UTC'));
writeFileSync('dist/.nojekyll','');
