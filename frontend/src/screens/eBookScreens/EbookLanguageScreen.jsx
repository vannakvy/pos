import React from 'react';
import LanguageCom from '../../components/eBookComponents/LanguageCom';
import Python from '../../img/Python.png';
import c_plus from '../../img/c++.png';
import nodejs from '../../img/nodejs.png';
import jquery from '../../img/jquery.png';

const EbookLanguageScreen = () => {
 return (
  <div className="p-2 pb-5">
   <h3 className="mt-2 text-center">ភាសាកុំព្យូទ័រទាំងអស់</h3>
   <div className="container">
    <h5>ផ្នែកខាងមុខ UI</h5>
    <div
     className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 border py-3"
     style={{ background: 'rgb(240,240,240' }}
    >
     <div className="col">
      <LanguageCom
       lang={'HTML'}
       icon={'fab fa-html5'}
       color={'rgb(29,156,235)'}
      />
     </div>
     <div className="col">
      <LanguageCom
       lang={'CSS'}
       icon={'fab fa-css3'}
       color={'black'}
       bg={'rgb(29,156,235)'}
      />
     </div>
     <div className="col">
      <LanguageCom
       lang={'JavaScript'}
       icon={'fab fa-js-square'}
       color={'black'}
       bg={'rgb(247,229,33)'}
      />
     </div>
     <div className="col">
      <LanguageCom lang={'jQuery'} img={jquery} color={'black'} />
     </div>
     <div className="col">
      <LanguageCom
       lang={'Bootstrap'}
       icon={'fab fa-bootstrap'}
       color={'white'}
       bg={'rgb(119,15,241)'}
      />
     </div>
    </div>
    <h5 className="mt-5">ភាសាកុំព្យូទ័រ</h5>
    <div
     className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 border py-3"
     style={{ background: 'rgb(240,240,240' }}
    >
     <div className="col">
      <LanguageCom lang={'Node js'} img={nodejs} color={'dark'} />
     </div>
     <div className="col">
      <LanguageCom lang={'Python'} img={Python} color={'dark'} />
     </div>
     <div className="col">
      <LanguageCom lang={'C++'} img={c_plus} color={'dark'} />
     </div>

     <div className="col">
      <LanguageCom lang={'php'} icon={'fab fa-php'} color={'dark'} />
     </div>
     <div className="col">
      <LanguageCom lang={'Java'} icon={'fab fa-java'} color={'dark'} />
     </div>
    </div>
    <h5 className="mt-5">ទិន្នន័យ Database</h5>
    <div
     className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 border py-3"
     style={{ background: 'rgb(240,240,240' }}
    >
     <div className="col">
      <LanguageCom lang={'SQL'} icon={'fas fa-database'} color={'dark'} />
     </div>
    </div>
   </div>
  </div>
 );
};

export default EbookLanguageScreen;
