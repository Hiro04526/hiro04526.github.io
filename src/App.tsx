import "./App.pcss";
import Sidebar from './components/SideBar';
import "./index.pcss";

const TABS = ["About", "Resume", "Portfolio"];

{/*function Navbar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  return (
    <nav className="flex space-x-4 bg-gray-800 text-white p-4">
      {TABS.map((tab) => (
        <a key={tab} href={`#${tab.toLowerCase()}`} className={`hover:text-yellow-400 ${activeTab === tab ? 'text-yellow-400' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</a>
      ))}
      <a href="#contact" className="hover:text-yellow-400">Contact</a>
    </nav>
  );
}*/}

{/*function MainContent({ activeTab }: { activeTab: string }) {
  return (
    <main className="flex-1 bg-[#18191A] min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {activeTab === "About" && (
          <section className="mb-8">
            <div className="bg-[#23272F] rounded-xl p-8 shadow-lg mb-6">
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
                <span className="mr-2 border-l-4 border-yellow-400 pl-2">About Me</span>
              </h2>
              <p className="text-gray-300 mb-4">
                Hi, I'm Hiro, a passionate Computer Science student at De La Salle University Manila, with a focus on Software Technology. I love solving problems—whether it's through designing intuitive user interfaces, coding creative solutions, or bringing technical ideas to life in fun and engaging ways.
              </p>
              <p className="text-gray-400 mb-4">
                Over the years, I've worked on projects that reflect my curiosity and creativity, like developing GUIs in Java and designing & developing websites and mobile apps. These experiences have been incredibly rewarding, giving me the tools to turn complex ideas into something that feels simple and natural for people to use.
              </p>
              <p className="text-gray-400">
                Beyond my technical skills, I enjoy taking on leadership roles where I can collaborate with others and make an impact. Whether it's leading the Public Relations Committee for Tech Summit 2024 or working as a Student Services Executive, I've learned the value of communication, teamwork, and staying organized under pressure.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">What I'm Doing</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#23272F] rounded-xl p-6 flex flex-col items-center shadow-lg">
                  <MdDesignServices className="text-4xl text-yellow-400 mb-2" />
                  <span className="font-semibold text-white mb-1">UI/UX Design</span>
                  <span className="text-gray-400 text-sm text-center">Modern, user-friendly interface design for web and mobile apps.</span>
                </div>
                <div className="bg-[#23272F] rounded-xl p-6 flex flex-col items-center shadow-lg">
                  <MdWeb className="text-4xl text-yellow-400 mb-2" />
                  <span className="font-semibold text-white mb-1">Web Development</span>
                  <span className="text-gray-400 text-sm text-center">Building scalable, fast, and responsive web applications.</span>
                </div>
                <div className="bg-[#23272F] rounded-xl p-6 flex flex-col items-center shadow-lg">
                  <MdPhoneIphone className="text-4xl text-yellow-400 mb-2" />
                  <span className="font-semibold text-white mb-1">Mobile Development</span>
                  <span className="text-gray-400 text-sm text-center">Developing cross-platform mobile apps for Android and iOS.</span>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2 text-yellow-600">Skills</h3>
        <ul className="flex flex-wrap gap-2">
          <li className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">React</li>
          <li className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">TypeScript</li>
          <li className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</li>
          <li className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">JavaScript</li>
          <li className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">HTML/CSS</li>
          <li className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">Git</li>
        </ul>
      </div>
      <section id="portfolio" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded shadow p-4 flex flex-col">
            <img src="/assets/images/project-1.png" alt="Project 1" className="rounded mb-3 aspect-video object-cover" />
            <h3 className="font-semibold text-lg mb-1">Project One</h3>
            <p className="text-sm text-gray-600 mb-2">A sample web application built with React and Tailwind CSS.</p>
            <a href="#" className="mt-auto inline-block bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition">View Project</a>
          </div>
          <div className="bg-white rounded shadow p-4 flex flex-col">
            <img src="/assets/images/project-2.png" alt="Project 2" className="rounded mb-3 aspect-video object-cover" />
            <h3 className="font-semibold text-lg mb-1">Project Two</h3>
            <p className="text-sm text-gray-600 mb-2">A portfolio website featuring modern design and responsive layout.</p>
            <a href="#" className="mt-auto inline-block bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition">View Project</a>
          </div>
          <div className="bg-white rounded shadow p-4 flex flex-col">
            <img src="/assets/images/project-3.png" alt="Project 3" className="rounded mb-3 aspect-video object-cover" />
            <h3 className="font-semibold text-lg mb-1">Project Three</h3>
            <p className="text-sm text-gray-600 mb-2">A creative landing page for a digital agency using React.</p>
            <a href="#" className="mt-auto inline-block bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition">View Project</a>
          </div>
        </div>
      </section>
      <section id="blog" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Blog</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded shadow p-4 flex flex-col">
            <h3 className="font-semibold text-lg mb-1">How I Built My Portfolio</h3>
            <div className="text-xs text-gray-400 mb-2">April 2025</div>
            <p className="text-sm text-gray-600 mb-3">A step-by-step guide on designing and developing a modern personal portfolio using React and Tailwind CSS.</p>
            <a href="#" className="text-yellow-600 hover:underline mt-auto">Read More</a>
          </div>
          <div className="bg-white rounded shadow p-4 flex flex-col">
            <h3 className="font-semibold text-lg mb-1">Tips for Junior Developers</h3>
            <div className="text-xs text-gray-400 mb-2">March 2025</div>
            <p className="text-sm text-gray-600 mb-3">Essential advice and resources for those starting their journey in web development and programming.</p>
            <a href="#" className="text-yellow-600 hover:underline mt-auto">Read More</a>
          </div>
        </div>
      </section>
      <section id="contact" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <form className="bg-white rounded shadow p-6 max-w-xl mx-auto flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50" required></textarea>
          </div>
          <button type="submit" className="bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition">Send Message</button>
        </form>
      </section>
    </main>
  );
}*/}

function App() {
  {/*const [activeTab, setActiveTab] = useState("About");*/}

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#101113]">
      <Sidebar />
      {/*<div className="flex-1 flex flex-col">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <MainContent activeTab={activeTab} />
      </div>*/}
    </div>
  );
}

export default App;
