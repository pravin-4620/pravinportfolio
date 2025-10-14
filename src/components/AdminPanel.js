import React, { useState, useEffect } from 'react';
import { 
  X, Save, Plus, Trash2, Edit2, 
  User, Briefcase, Award, Code, 
  FolderKanban, GraduationCap, LogOut 
} from 'lucide-react';

const AdminPanel = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [data, setData] = useState({
    about: JSON.parse(localStorage.getItem('aboutData') || '{}'),
    projects: JSON.parse(localStorage.getItem('projectsData') || '[]'),
    certifications: JSON.parse(localStorage.getItem('certificationsData') || '[]'),
    timeline: JSON.parse(localStorage.getItem('timelineData') || '[]'),
    skills: JSON.parse(localStorage.getItem('skillsData') || '[]'),
  });

  const [editingItem, setEditingItem] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const saveData = (section, newData) => {
    localStorage.setItem(`${section}Data`, JSON.stringify(newData));
    setData({ ...data, [section]: newData });
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    onLogout(false);
  };

  // About Section Editor
  const AboutEditor = () => {
    const [aboutText, setAboutText] = useState(data.about.text || '');
    
    const handleSave = () => {
      saveData('about', { text: aboutText });
      alert('About section updated!');
    };

    return (
      <div className="editor-section">
        <h3>Edit About Section</h3>
        <textarea
          value={aboutText}
          onChange={(e) => setAboutText(e.target.value)}
          placeholder="Write about yourself..."
          rows="10"
          className="admin-textarea"
        />
        <button onClick={handleSave} className="btn btn-primary">
          <Save size={18} /> Save About
        </button>
      </div>
    );
  };

  // Projects Editor
  const ProjectsEditor = () => {
    const [projects, setProjects] = useState(data.projects);
    const [currentProject, setCurrentProject] = useState({
      title: '', description: '', category: '', technologies: '', 
      image: '', liveUrl: '', githubUrl: ''
    });

    const addProject = () => {
      const newProject = { 
        ...currentProject, 
        id: Date.now(),
        technologies: currentProject.technologies.split(',').map(t => t.trim())
      };
      const updated = [...projects, newProject];
      setProjects(updated);
      saveData('projects', updated);
      setCurrentProject({ title: '', description: '', category: '', technologies: '', image: '', liveUrl: '', githubUrl: '' });
      setShowForm(false);
    };

    const deleteProject = (id) => {
      const updated = projects.filter(p => p.id !== id);
      setProjects(updated);
      saveData('projects', updated);
    };

    return (
      <div className="editor-section">
        <div className="section-header">
          <h3>Manage Projects</h3>
          <button onClick={() => setShowForm(!showForm)} className="btn btn-primary">
            <Plus size={18} /> Add Project
          </button>
        </div>

        {showForm && (
          <div className="admin-form">
            <input
              type="text"
              placeholder="Project Title"
              value={currentProject.title}
              onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
            />
            <textarea
              placeholder="Project Description"
              value={currentProject.description}
              onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
              rows="4"
            />
            <input
              type="text"
              placeholder="Category (e.g., Web App)"
              value={currentProject.category}
              onChange={(e) => setCurrentProject({ ...currentProject, category: e.target.value })}
            />
            <input
              type="text"
              placeholder="Technologies (comma separated)"
              value={currentProject.technologies}
              onChange={(e) => setCurrentProject({ ...currentProject, technologies: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              value={currentProject.image}
              onChange={(e) => setCurrentProject({ ...currentProject, image: e.target.value })}
            />
            <input
              type="text"
              placeholder="Live URL"
              value={currentProject.liveUrl}
              onChange={(e) => setCurrentProject({ ...currentProject, liveUrl: e.target.value })}
            />
            <input
              type="text"
              placeholder="GitHub URL"
              value={currentProject.githubUrl}
              onChange={(e) => setCurrentProject({ ...currentProject, githubUrl: e.target.value })}
            />
            <button onClick={addProject} className="btn btn-primary">
              <Save size={18} /> Add Project
            </button>
          </div>
        )}

        <div className="items-list">
          {projects.map((project) => (
            <div key={project.id} className="admin-item">
              <div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <span className="badge">{project.category}</span>
              </div>
              <button onClick={() => deleteProject(project.id)} className="btn-delete">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Certifications Editor
  const CertificationsEditor = () => {
    const [certs, setCerts] = useState(data.certifications);
    const [currentCert, setCurrentCert] = useState({
      title: '', issuer: '', date: '', image: ''
    });

    const addCertification = () => {
      const newCert = { ...currentCert, id: Date.now() };
      const updated = [...certs, newCert];
      setCerts(updated);
      saveData('certifications', updated);
      setCurrentCert({ title: '', issuer: '', date: '', image: '' });
      setShowForm(false);
    };

    const deleteCert = (id) => {
      const updated = certs.filter(c => c.id !== id);
      setCerts(updated);
      saveData('certifications', updated);
    };

    return (
      <div className="editor-section">
        <div className="section-header">
          <h3>Manage Certifications</h3>
          <button onClick={() => setShowForm(!showForm)} className="btn btn-primary">
            <Plus size={18} /> Add Certification
          </button>
        </div>

        {showForm && (
          <div className="admin-form">
            <input
              type="text"
              placeholder="Certification Title"
              value={currentCert.title}
              onChange={(e) => setCurrentCert({ ...currentCert, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Issuer"
              value={currentCert.issuer}
              onChange={(e) => setCurrentCert({ ...currentCert, issuer: e.target.value })}
            />
            <input
              type="text"
              placeholder="Date"
              value={currentCert.date}
              onChange={(e) => setCurrentCert({ ...currentCert, date: e.target.value })}
            />
            <input
              type="text"
              placeholder="Certificate PDF URL (e.g., /certificates/cert.pdf)"
              value={currentCert.image}
              onChange={(e) => setCurrentCert({ ...currentCert, image: e.target.value })}
            />
            <button onClick={addCertification} className="btn btn-primary">
              <Save size={18} /> Add Certification
            </button>
          </div>
        )}

        <div className="items-list">
          {certs.map((cert) => (
            <div key={cert.id} className="admin-item">
              <div>
                <h4>{cert.title}</h4>
                <p>{cert.issuer} - {cert.date}</p>
              </div>
              <button onClick={() => deleteCert(cert.id)} className="btn-delete">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Skills Editor
  const SkillsEditor = () => {
    const [skills, setSkills] = useState(data.skills);
    const [currentSkill, setCurrentSkill] = useState({
      name: '', icon: ''
    });

    const addSkill = () => {
      const newSkill = { ...currentSkill, id: Date.now() };
      const updated = [...skills, newSkill];
      setSkills(updated);
      saveData('skills', updated);
      setCurrentSkill({ name: '', icon: '' });
      setShowForm(false);
    };

    const deleteSkill = (id) => {
      const updated = skills.filter(s => s.id !== id);
      setSkills(updated);
      saveData('skills', updated);
    };

    return (
      <div className="editor-section">
        <div className="section-header">
          <h3>Manage Skills</h3>
          <button onClick={() => setShowForm(!showForm)} className="btn btn-primary">
            <Plus size={18} /> Add Skill
          </button>
        </div>

        {showForm && (
          <div className="admin-form">
            <input
              type="text"
              placeholder="Skill Name"
              value={currentSkill.name}
              onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Icon URL (DevIcon CDN)"
              value={currentSkill.icon}
              onChange={(e) => setCurrentSkill({ ...currentSkill, icon: e.target.value })}
            />
            <button onClick={addSkill} className="btn btn-primary">
              <Save size={18} /> Add Skill
            </button>
          </div>
        )}

        <div className="items-list">
          {skills.map((skill) => (
            <div key={skill.id} className="admin-item">
              <div>
                <h4>{skill.name}</h4>
              </div>
              <button onClick={() => deleteSkill(skill.id)} className="btn-delete">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Timeline Editor
  const TimelineEditor = () => {
    const [timeline, setTimeline] = useState(data.timeline);
    const [currentItem, setCurrentItem] = useState({
      type: 'Education', company: '', role: '', period: '', description: ''
    });

    const addTimelineItem = () => {
      const newItem = { ...currentItem, id: Date.now() };
      const updated = [...timeline, newItem];
      setTimeline(updated);
      saveData('timeline', updated);
      setCurrentItem({ type: 'Education', company: '', role: '', period: '', description: '' });
      setShowForm(false);
    };

    const deleteTimelineItem = (id) => {
      const updated = timeline.filter(t => t.id !== id);
      setTimeline(updated);
      saveData('timeline', updated);
    };

    return (
      <div className="editor-section">
        <div className="section-header">
          <h3>Manage Timeline</h3>
          <button onClick={() => setShowForm(!showForm)} className="btn btn-primary">
            <Plus size={18} /> Add Timeline Item
          </button>
        </div>

        {showForm && (
          <div className="admin-form">
            <select
              value={currentItem.type}
              onChange={(e) => setCurrentItem({ ...currentItem, type: e.target.value })}
            >
              <option value="Education">Education</option>
              <option value="Experience">Experience</option>
            </select>
            <input
              type="text"
              placeholder="Institution/Company"
              value={currentItem.company}
              onChange={(e) => setCurrentItem({ ...currentItem, company: e.target.value })}
            />
            <input
              type="text"
              placeholder="Degree/Role"
              value={currentItem.role}
              onChange={(e) => setCurrentItem({ ...currentItem, role: e.target.value })}
            />
            <input
              type="text"
              placeholder="Period (e.g., 2020-2024)"
              value={currentItem.period}
              onChange={(e) => setCurrentItem({ ...currentItem, period: e.target.value })}
            />
            <textarea
              placeholder="Description"
              value={currentItem.description}
              onChange={(e) => setCurrentItem({ ...currentItem, description: e.target.value })}
              rows="3"
            />
            <button onClick={addTimelineItem} className="btn btn-primary">
              <Save size={18} /> Add Timeline Item
            </button>
          </div>
        )}

        <div className="items-list">
          {timeline.map((item) => (
            <div key={item.id} className="admin-item">
              <div>
                <span className="badge">{item.type}</span>
                <h4>{item.company}</h4>
                <p>{item.role} | {item.period}</p>
              </div>
              <button onClick={() => deleteTimelineItem(item.id)} className="btn-delete">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const tabs = [
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'projects', label: 'Projects', icon: <FolderKanban size={18} /> },
    { id: 'certifications', label: 'Certifications', icon: <Award size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={18} /> },
    { id: 'timeline', label: 'Timeline', icon: <GraduationCap size={18} /> },
  ];

  return (
    <div className="admin-panel-overlay">
      <div className="admin-panel">
        <div className="admin-header">
          <h2>Admin Panel</h2>
          <button onClick={handleLogout} className="btn btn-secondary">
            <LogOut size={18} /> Logout
          </button>
        </div>

        <div className="admin-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`admin-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => { setActiveTab(tab.id); setShowForm(false); }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div className="admin-content">
          {activeTab === 'about' && <AboutEditor />}
          {activeTab === 'projects' && <ProjectsEditor />}
          {activeTab === 'certifications' && <CertificationsEditor />}
          {activeTab === 'skills' && <SkillsEditor />}
          {activeTab === 'timeline' && <TimelineEditor />}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
