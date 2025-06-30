
import photo from '@/assets/photo.png'; // Assuming you have a logo image in your assets
import _01 from '@/assets/home.png'; 
import logoBTFS from '@/assets/logobtfs.png'; // Assuming you have a BTFS logo image in your assets
import btfsfund from '@/assets/btfsfund.png'; // Assuming you have a BTFS fund image in your assets
// import btfslogin from '@/assets/btfslogin.png'; // Assuming you have a BTFS login image in your assets
import btfsok from '@/assets/btfsok.png'; // Assuming you have a BTFS ok image in your assets
import btfssignup from '@/assets/btfssignup.png'; // Assuming you have a BTFS signup image in your assets
import btfslogin from '@/assets/btfslogin.png'; // Assuming you have a BTFS waiting image in your assets
import dashboard from '@/assets/dashboard.png'; // Assuming you have a dashboard image in your assets
import usage from '@/assets/usage.png'; // Assuming you have a usage image in your assets
import permissions from '@/assets/permissions.png'; // Assuming you have a permissions image in your assets
import peers from '@/assets/peers.png'; // Assuming you have a peers image in your assets
import frontlabs from '@/assets/frontlabs.png'; // Assuming you have a frontlabs logo image in your assets
import tgm from '@/assets/tgm.png'; // Assuming you have a telegram logo image in your assets
//@ts-ignore
import commands from '@/assets/commands.js'

const UsageGuide = () => {

  return (
    <div className="min-h-screen text-white ">
      <div className="container mx-auto p-6 max-w-7xl">
        {/* Header */}

        <div className="text-center items-center  justify-center mb-8 flex">
            <img src={photo} alt="ZAP Logo" className="h-44 w-44" />
            <h1 className="text-4xl bg-gradient-to-r from-[#d91784] to-[#fb9e2c] bg-clip-text text-transparent font-extrabold pb-3">
                Usage Guide
            </h1>
          {/* <p className="text-gray-400 text-lg">Complete system overview and onboarding process</p> */}
        </div>
        {/* home tab info */}
        <div className="h-auto md:flex bg-white/30 backdrop-blur mb-10 rounded-l-md">
            <div className="text-black w-full py-3 px-2">
                <h1 className="text-2xl font-extrabold mb-2">The newTab !!</h1>
                <p className="text-black/90 text-xl text-start font-mono mb-2">On the new tab page you can access the BTFS dashbaord via the button at the bottom right corner.</p>
                <p className="text-black/90 text-xl text-start font-mono mb-2">This button exist on every new tab, let say it's your fisrt time on zap then the same button is your entry point for the BTFS init.</p>
                <img src={logoBTFS} className="w-[50px] bg-black rounded-full p-1"/>
            </div>
            <img src={_01} alt="01 image" className="w-[100%] md:w-[70%]" />
        </div>

        {/*  btfs init */}
         <div className="h-auto md:flex bg-white/30 backdrop-blur mb-10 rounded-r-md">
            <img src={btfsfund} alt="01 image" className="w-[100%] md:w-[70%]" />
            <div className="text-black w-full py-3 px-2">
                <h1 className="text-2xl font-extrabold mb-2 text-mono"> ./btfs init</h1>
                <p className="text-black/90 text-xl text-start font-mono mb-2">The requires you to add around 30,000 of btt to your node address to init the node.</p>
                <p className="text-black/90 text-xl text-start font-mono mb-2">Either scan the qr or just copy the address to transfer the btt.</p>
                <p className="text-black/90 text-xl text-start font-mono mb-2">The peerId created by this will be the possesed-id of the browser and it will swarmed to other zap users.</p>
                <p className="text-black/90 text-xl text-start font-mono mb-2">✅ Later setup a pasword and login.</p>
            </div>
        </div>

        <div className="h-auto md:flex bg-white/30 backdrop-blur mb-10 rounded-l-md">
            <div className="text-black w-full py-3 px-2">
                <h1 className="text-2xl font-extrabold mb-2">Setup a password!!</h1>
                <p className="text-black/90 text-xl text-start font-mono mb-2">Make sure to remember the password you set.</p>
                <p className="text-black/90 text-xl text-start font-mono mb-2">The password be useed to signin at later stages of time.</p>
            </div>
            <img src={btfssignup} alt="01 image" className="w-[100%] md:w-[70%]" />
        </div>
        
        <div className="h-auto md:flex bg-white/30 backdrop-blur mb-10 rounded-r-md">
            <img src={btfslogin} alt="01 image" className="w-[100%] md:w-[70%]" />
            <div className="text-black w-full py-3 px-2">
                <h1 className="text-2xl font-extrabold mb-2 text-mono">Login</h1>
                <p className="text-black/90 text-xl text-start font-mono mb-2">Enter the pasword to login into the node.</p>
            </div>
        </div> 

        {/* btfs wait */}
        <div className="h-auto md:flex bg-white/30 backdrop-blur mb-10 rounded-l-md">
            <div className="text-black w-full py-3 px-2">
                <h1 className="text-2xl font-extrabold mb-2">Wait for the node to be up!!</h1>
                <p className="text-black/90 text-xl text-start font-mono mb-2">At any point of time, after a restart you may wait for the node to start up and configure the required services.</p>
                <p className="text-black/90 text-xl text-start font-mono mb-2">Once ready you can navigate to the dashboard via the link</p>
            </div>
            <img src={btfsok} alt="01 image" className="w-[100%] md:w-[70%]" />
        </div>

        {/* btfs dashbaord */}
        <div className="h-auto md:flex bg-white/30 backdrop-blur mb-10 rounded-r-md">
            <img src={dashboard} alt="01 image" className="w-[100%] md:w-[70%]" />
            <div className="text-black w-full py-3 px-2">
                <h1 className="text-2xl font-extrabold mb-2 text-mono">Dashboard</h1>
                <p className="text-black/90 text-xl text-start font-mono mb-2">At the bottom, you can see the navigator to navigate the diffrent pages.</p>
                <p className="text-black/90 text-xl text-start font-mono mb-2">This Dashbaord is under development until a alpha release is done.</p>
            </div>
        </div>

        {/* usage page */}
         <div className="h-auto md:flex bg-white/30 backdrop-blur mb-10 rounded-r-md">
            <div className="text-black w-full py-3 px-2">
                <h1 className="text-2xl font-extrabold mb-2 text-mono">Usage</h1>
                <p className="text-black/90 text-xl text-start font-mono mb-2">This page where you can view the current progress and usable commands.</p>
            </div>
            <img src={usage} alt="01 image" className="w-[100%] md:w-[70%]" />
        </div>
        
        {/* permisisons */}
        <div className="h-auto md:flex bg-white/30 backdrop-blur mb-10 rounded-r-md">
            <img src={permissions} alt="01 image" className="w-[100%] md:w-[70%]" />
            <div className="text-black w-full py-3 px-2">
                <h1 className="text-2xl font-extrabold mb-2 text-mono">Permission</h1>
                <p className="text-black/90 text-xl text-start font-mono mb-2">Navigating to web-injections, give you access to controlwehat command access to give to which webpages.</p>
                <p className="text-black/90 text-xl text-start font-mono mb-2">For now two ways to injecct permissions,</p>
                <p className="text-black/90 text-xl text-start font-mono mb-2">First, by simply pasing in the injection-link given by respective dev.</p>
                <p className="text-black/90 text-xl text-start font-mono mb-2">Secondly, by simply pasing in the JSON-object for the permision.</p>
                <p className="text-black/90 text-xl text-start font-mono mb-2">Lastly, manually selecting the function to allow.</p>
            </div>
        </div>

        {/* peers */}
        <div className="h-auto md:flex bg-white/30 backdrop-blur mb-10 rounded-r-md">
            <div className="text-black w-full py-3 px-2">
                <h1 className="text-2xl font-extrabold mb-2 text-mono">Usage</h1>
                <p className="text-black/90 text-xl text-start font-mono mb-2">This page lets you see the connected peers and manage the p2p-connections. check out the video to know more about the p2p-conns.</p>
                <p className="text-black/90 text-xl text-start font-mono mb-2">You can also make new connection for testing p2p on certain protocols.</p>
            </div>
            <img src={peers} alt="01 image" className="w-[100%] md:w-[70%]" />
        </div>
         
        <p>More Pages are subjected to be added later....</p>

        <hr className="mb-5"/>

        <section className=" text-white py-16 px-6">
            <h1 className="text-4xl text-white font-extrabold pb-3">
                Commands available and their function calls
            </h1>
            <div className="max-w-5xl mx-auto">
                <div className="space-y-8">
                {commands.map((cmd: any, index: any) => (
                    <div key={index} className="bg-white/20 p-6 rounded-[3px] shadow ">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2 font-mono">{cmd.name}</h3>
                    <p className="text-gray-300 mb-2">{cmd.description}</p>
                    <pre className="bg-white/50 text-teal-800 font-extrabold text-xl p-4 rounded-md overflow-x-auto">
                        <code>{cmd.signature}</code>
                    </pre>
                    </div>
                ))}
                </div>
            </div>
        </section>
                
      </div>
       <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg"><img src={frontlabs} /></span>
              </div>
              <h3 className="text-xl font-bold">FrontLabs</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              At Front Labs, We are building Real-World Blockchain Use Cases Through Experimentation and Innovation.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Products</h4>
            <ul className="space-y-2">
              <li><a href="https://docs.renthub.cloud/" className="text-gray-400 hover:text-white transition-colors">Renthub-BTFS</a></li>
              <li><a href="http://pegasuspay.frontlabs.cloud/" className="text-gray-400 hover:text-white transition-colors">Pegasus-Pay</a></li>
              <li><a href="https://thecodehive.online/" className="text-gray-400 hover:text-white transition-colors">Codehive</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/thefrontlabs" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="https://frontlabs.cloud/" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            {/* <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors">
                Subscribe
              </button>
            </div> */}
            
            {/* Contact Info */}
            <div className="pt-4 space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <p>Telegram</p>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm"><img src={tgm} className="w-[100px]" /></span>
               
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Frontlabs.
            </div>
            <div className="flex space-x-6 text-sm">
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a> */
              <p className="text-gray-400 hover:text-white transition-colors"> The zap is free to use.</p>}
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default UsageGuide;