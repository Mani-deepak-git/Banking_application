import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
const Home=()=>{
const loggedIn={firstName:'Mani',lastName:'Deepak'
    ,email:'contact@gmail.com'
}
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your accounts and transcations efficiently."
                    />
                    <TotalBalanceBox
             accounts={[]}
             totalBanks={1}
             totalCurrentBalance={1250.35}
             />
                </header>
            </div>
            
             <RightSidebar
             user={loggedIn}
             transaction={[]}
             banks={[{currentBalance: 123.50},{currentBalance:50.50}]}
             />
            </section>
    )
}
export default Home