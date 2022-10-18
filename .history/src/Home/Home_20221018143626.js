

function Home(){
    const pic = require('./static/image/selfy.jpg');
    return(
        <div className="Home">
            <div className='profile'>
                <div className="introduction">
                    <h2 className='context-title'>介紹:</h2>
                    <div className='context'>
                        <b>擁有2年軟體⼯程師經驗,從開始⾃學Python做⾃動化到設計網⾴⽤到Django framework</b> 
                        <b>由於網⾴製作利⽤Django framework 還是會需要動態網⾴的製作,所以前端使⽤Javascript 以及 Ajax,Jquery ,專案變⼤雖然都是獨立作業但還是學了GitFlow 來版本控管</b>
                        <b>對區塊鏈感興趣也有涉略投資⽽⾃學Web3 相關的領域, 由於⽤過Django 做過網⾴但是建構流程繁雜,所以開始學習 React.js 跟 Vue.js.</b>
                    </div>
                </div>
                <div className='information'>
                    <div className="picture">
                        <img src={pic} alt="" />
                        <h2 className='MainName'>Huang Chien Hung</h2>
                    </div>
                    <div className="contact">
                      
                    </div>
                </div>
                
            </div>
        </div>
    )   
}
export default Home ;