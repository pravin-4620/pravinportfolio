const express = require('express');
const router = express.Router();
const About = require('../models/About');
const Project = require('../models/Project');
const Certification = require('../models/Certification');
const Skill = require('../models/Skill');
const Timeline = require('../models/Timeline');

// ===== ABOUT ROUTES =====
router.get('/about', async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = await About.create({ text: '' });
    }
    res.json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/about', async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = new About({ text: req.body.text });
    } else {
      about.text = req.body.text;
      about.updatedAt = Date.now();
    }
    await about.save();
    res.json(about);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ===== PROJECT ROUTES =====
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/projects', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/projects/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===== CERTIFICATION ROUTES =====
router.get('/certifications', async (req, res) => {
  try {
    const certifications = await Certification.find().sort({ createdAt: -1 });
    res.json(certifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/certifications', async (req, res) => {
  try {
    const certification = new Certification(req.body);
    await certification.save();
    res.status(201).json(certification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/certifications/:id', async (req, res) => {
  try {
    await Certification.findByIdAndDelete(req.params.id);
    res.json({ message: 'Certification deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===== SKILL ROUTES =====
router.get('/skills', async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/skills', async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/skills/:id', async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ message: 'Skill deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===== TIMELINE ROUTES =====
router.get('/timeline', async (req, res) => {
  try {
    const timeline = await Timeline.find().sort({ createdAt: -1 });
    res.json(timeline);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/timeline', async (req, res) => {
  try {
    const timelineItem = new Timeline(req.body);
    await timelineItem.save();
    res.status(201).json(timelineItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/timeline/:id', async (req, res) => {
  try {
    await Timeline.findByIdAndDelete(req.params.id);
    res.json({ message: 'Timeline item deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
