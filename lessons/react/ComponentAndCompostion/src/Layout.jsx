
const Header  =()=>{
    return (
      <h1>Welcome to Header</h1>


    )
}
const  Footer =()=>{
    return (
      <h1>Welcome to Footer</h1>


    )

}

const  WhyChooseUs =() =>{
    return (
      <h1>Welcome to Why Choose Us</h1>


    )

}




const Layout = () => {
  return (
    <div>
      <Header />
      <main>
      <WhyChooseUs/>
      </main>
    <Footer />
    </div>
  )
}

export default Layout;
