const mobilePopup = document.querySelector('.mobile-popup-overlay');
const mobilePopupWindow = document.createElement('section');
mobilePopupWindow.classList.add('mobile-popup-window');
const mobilePopupWindowHead = document.createElement('section');
mobilePopupWindowHead.classList.add('mobile-pop-head');
const mobilePopupTitle = document.createElement('h2');
const mobilePopupCloseBtn = document.createElement('button');
mobilePopupCloseBtn.classList.add('mobile-popup-closeBtn');
mobilePopupCloseBtn.type = 'button';
const mobilePopupCloseBtnI1 = document.createElement('i');
const mobilePopupCloseBtnI2 = document.createElement('i');
mobilePopupCloseBtn.append(mobilePopupCloseBtnI1, mobilePopupCloseBtnI2);
mobilePopupWindowHead.append(mobilePopupTitle, mobilePopupCloseBtn);
const mobilePopupClientRoleYear = document.createElement('ul');
mobilePopupClientRoleYear.classList.add('list1');
const mobilePopupClient = document.createElement('li');
mobilePopupClient.classList.add('list1-bold');
const mobilePopupDot1 = document.createElement('li');
mobilePopupDot1.classList.add('list1-dot');
const mobilePopupRole = document.createElement('li');
mobilePopupRole.classList.add('list1-other');
const mobilePopupDot2 = document.createElement('li');
mobilePopupDot2.classList.add('list1-dot');
const mobilePopupYear = document.createElement('li');
mobilePopupYear.classList.add('list1-other');
mobilePopupClientRoleYear.append(mobilePopupClient, mobilePopupDot1, mobilePopupRole, mobilePopupDot2, mobilePopupYear);
const mobilePopupImage = document.createElement('img');
mobilePopupImage.classList.add('mobile-popup-image');
const mobilePopupDesc = document.createElement('p');
const mobilePopupTechList = document.createElement('ul');
mobilePopupTechList.classList.add('list2');
const mobilePopupLine = document.createElement('hr');
const mobilePopupButtons = document.createElement('section');
mobilePopupButtons.classList.add('live-btns');
const mobilePopupLiveBtn = document.createElement('button');
mobilePopupLiveBtn.textContent = 'See live';
const liveIconImage = document.createElement('img');
liveIconImage.src = './images/icons/Icon - Export.svg';
mobilePopupLiveBtn.appendChild(liveIconImage);
liveIconImage.classList.add('btn-icon');
mobilePopupLiveBtn.classList.add('live-btn');
const mobilePopupSourceBtn = document.createElement('button');
mobilePopupSourceBtn.classList.add('live-btn');
mobilePopupSourceBtn.textContent = 'See source';
const sourceIconImage = document.createElement('img');
sourceIconImage.src = './images/icons/Icon -GitHub.svg';
sourceIconImage.classList.add('btn-icon');
mobilePopupSourceBtn.appendChild(sourceIconImage);
mobilePopupButtons.append(mobilePopupLiveBtn, mobilePopupSourceBtn);
mobilePopupWindow.append(mobilePopupWindowHead, mobilePopupClientRoleYear, mobilePopupImage, mobilePopupDesc, mobilePopupTechList, mobilePopupLine, mobilePopupButtons);
mobilePopup.appendChild(mobilePopupWindow);

const openMobilePopup = (project) => {
    mobilePopup.style.display = 'block';
    document.body.style.overflow = 'hidden';
    mobilePopupTitle.textContent = project.mobileName;
    mobilePopupImage.src = project.mobileImage;
    mobilePopupImage.alt = project.mobileName;
    mobilePopupClient.textContent = project.mobileClient;
    mobilePopupRole.textContent = project.mobileRole;
    mobilePopupYear.textContent = project.mobileYear;
    mobilePopupDot1.textContent = '•';
    mobilePopupDot2.textContent = '•';
    mobilePopupDesc.textContent = project.mobilePopupDesc;
    mobilePopupTechList.innerHTML = '';
    project.mobileTechnologies.forEach(tech => {
      const li = document.createElement('li');
      li.textContent = tech;
      mobilePopupTechList.appendChild(li);
    });

    liveBtn.onclick = () => window.open(project.liveLink, '_blank');
    sourceBtn.onclick = () => window.open(project.sourceLink, '_blank');
  };

const desktopPopup = document.querySelector('.desktop-popup-overlay');
const desktopPopupWindow = document.createElement('section');
desktopPopupWindow.classList.add('desktop-popup-window');
const desktopPopupHead = document.createElement('section');
desktopPopupHead.classList.add('desktop-pop-head');
const desktopPopupTitle = document.createElement('h2');
const desktopPopupCloseBtn = document.createElement('button');
desktopPopupCloseBtn.classList.add('desktop-popup-closeBtn');
const desktopPopupCloseBtnI1 = document.createElement('i');
const desktopPopupCloseBtnI2 = document.createElement('i');
desktopPopupCloseBtn.append(desktopPopupCloseBtnI1, desktopPopupCloseBtnI2);
desktopPopupHead.append(desktopPopupTitle, desktopPopupCloseBtn);
const desktopPopupClientRoleYear = document.createElement('ul');
desktopPopupClientRoleYear.classList.add('list1');
const desktopPopupClient = document.createElement('li');
desktopPopupClient.classList.add('list1-bold');
const desktopPopupDot1 = document.createElement('li');
desktopPopupDot1.classList.add('list1-dot');
const desktopPopupRole = document.createElement('li');
desktopPopupRole.classList.add('list1-other');
const desktopPopupDot2 = document.createElement('li');
desktopPopupDot2.classList.add('list1-dot');
const desktopPopupYear = document.createElement('li');
desktopPopupYear.classList.add('list1-other');
desktopPopupClientRoleYear.append(desktopPopupClient, desktopPopupDot1, desktopPopupRole, desktopPopupDot2, desktopPopupYear);
const desktopPopupImage = document.createElement('img');
desktopPopupImage.classList.add('desktop-pop-image');
const desktopPopupParaTechBtn = document.createElement('section');
desktopPopupParaTechBtn.classList.add('para-tech-btn');
const desktopPopupDesc = document.createElement('p');
const desktopPopupTechBtn = document.createElement('section');
desktopPopupTechBtn.classList.add('tech-btn');
const desktopPopupTechList = document.createElement('ul');
desktopPopupTechList.classList.add('list2');
const desktopPopupButtons = document.createElement('section');
desktopPopupButtons.classList.add('live-btns');
const desktopPopupLiveBtn = document.createElement('button');
desktopPopupLiveBtn.textContent = 'See live';
desktopPopupLiveBtn.classList.add('live-btn');
const desktopPopupSourceBtn = document.createElement('button');
desktopPopupSourceBtn.classList.add('live-btn');
desktopPopupSourceBtn.textContent = 'See source';
desktopPopupButtons.append(desktopPopupLiveBtn, desktopPopupSourceBtn);
desktopPopupTechBtn.append(desktopPopupTechList, desktopPopupButtons);
desktopPopupParaTechBtn.append(desktopPopupDesc, desktopPopupTechBtn);
desktopPopupWindow.append(desktopPopupHead, desktopPopupClientRoleYear, desktopPopupImage, desktopPopupParaTechBtn);
desktopPopup.appendChild(desktopPopupWindow);
const shareIcon = document.createElement('img');
shareIcon.src = './images/icons/Icon - Export.svg';
shareIcon.classList.add('btn-icon');
desktopPopupLiveBtn.appendChild(shareIcon);
const githubIcon = document.createElement('img');
githubIcon.src = './images/icons/Icon -GitHub.svg';
githubIcon.classList.add('btn-icon');
desktopPopupSourceBtn.appendChild(githubIcon);

const openDesktopPopup = (project) => {
    desktopPopup.style.display = 'block';
    document.body.style.overflow = 'hidden';
    desktopPopupTitle.textContent = project.desktopName;
    desktopPopupClient.textContent = project.desktopClient;
    desktopPopupDot1.textContent = '•';
    desktopPopupRole.textContent = project.desktopRole;
    desktopPopupDot2.textContent = '•';
    desktopPopupYear.textContent = project.desktopYear;
    desktopPopupImage.src = project.desktopImage;
    desktopPopupImage.alt = project.desktopName;
    desktopPopupDesc.textContent = project.desktopPopupDesc;
    desktopPopupTechList.innerHTML = '';
    project.desktopPopupTechnologies.forEach(tech => {
      const li = document.createElement('li');
      li.textContent = tech;
      desktopPopupTechList.appendChild(li);
    });

    desktopPopupLiveBtn.onclick = () => window.open(project.liveLink, '_blank');
    desktopPopupSourceBtn.onclick = () => window.open(project.sourceLink, '_blank');
  }

mobilePopupCloseBtn.addEventListener('click', () => {
  mobilePopup.style.display = 'none';
  document.body.style.overflow = '';
});

desktopPopupCloseBtn.addEventListener('click', () => {
  desktopPopup.style.display = 'none';
  document.body.style.overflow = '';
});

const projects = [
  {
    mobileImage: "./images/snapshoots/snap1.png",
    desktopImage: "./images/snapshoots/snap5.png",
    mobileName: 'Tonic',
    desktopName: 'Tonic',
    mobileClient: 'CANOPY',
    desktopClient: 'CANOPY',
    mobileRole: "Back End Dev",
    desktopRole: "Back End Dev",
    mobileYear: '2015',
    desktopYear: '2015',
    mobileDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    mobilePopupDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    desktopDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopPopupDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    mobileTechnologies: ['HTML', 'CSS', 'JavaScript'],
    desktopTechnologies: ['HTML', 'CSS', 'JavaScript'],
    desktopPopupTechnologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: "https://emmanuel-bass.github.io/Portfolio_setup/",
    sourceLink: "https://github.com/Emmanuel-Bass/Portfolio_setup"
  },
  {
    mobileImage: "./images/snapshoots/snap2.png",
    desktopImage: "./images/snapshoots/snap4.png",
    mobileName: 'Multi-Post Stories',
    desktopName: 'Multi-Post Stories',
    mobileClient: 'CANOPY',
    desktopRole: "Full Stack Dev",
    desktopClient: 'FACEBOOK',
    mobileRole: "Back End Dev",
    mobileYear: '2015',
    desktopYear: '2015',
    mobileDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    mobilePopupDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    desktopDesc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    desktopPopupDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    mobileTechnologies: ['HTML', 'CSS', 'JavaScript'],
    desktopTechnologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    desktopPopupTechnologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: "https://emmanuel-bass.github.io/Portfolio_setup/",
    sourceLink: "https://github.com/Emmanuel-Bass/Portfolio_setup"
  },
  {
    mobileImage: "./images/snapshoots/snap3.png",
    desktopImage: "./images/snapshoots/snap1.png",
    mobileName: 'Tonic',
    desktopName: 'Facebook 360',
    desktopClient: 'FACEBOOK',
    mobileClient: 'CANOPY',
    mobileRole: "Back End Dev",
    desktopRole: "Full Stack Dev",
    mobileYear: '2015',
    desktopYear: '2015',
    mobileDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    mobilePopupDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    desktopDesc: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    desktopPopupDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    mobileTechnologies: ['HTML', 'CSS', 'JavaScript'],
    desktopTechnologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    desktopPopupTechnologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: "https://emmanuel-bass.github.io/Portfolio_setup/",
    sourceLink: "https://github.com/Emmanuel-Bass/Portfolio_setup"
  },
  {
    mobileImage: "./images/snapshoots/snap4.png",
    desktopImage: "./images/snapshoots/snap2.png",
    mobileName: 'Multi-Post Stories',
    desktopName: 'Uber Navigation',
    mobileClient: 'CANOPY',
    desktopClient: 'Uber',
    mobileRole: "Back End Dev",
    desktopRole: "Lead Developer",
    mobileYear: '2015',
    desktopYear: '2018',
    mobileDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    mobilePopupDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    desktopDesc: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    desktopPopupDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    mobileTechnologies: ['HTML', 'CSS', 'JavaScript'],
    desktopTechnologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    desktopPopupTechnologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: "https://emmanuel-bass.github.io/Portfolio_setup/",
    sourceLink: "https://github.com/Emmanuel-Bass/Portfolio_setup"
  }
];

const mobileProjects = document.querySelector('.mobile-works');
for(const project of projects) {
  const card = document.createElement('section');
  card.classList.add('work-content');

  const img = document.createElement('img');
  img.classList.add('mobile-image')
  img.src = project.mobileImage;
  img.alt = project.mobileName;

  const title = document.createElement('h2');
  title.textContent = project.mobileName;

  const mobileMetaList = document.createElement('ul');
  mobileMetaList.classList.add('list1');

  const clientLi = document.createElement('li');
  clientLi.textContent = project.mobileClient;
  clientLi.classList.add('list1-bold');

  const dot1 = document.createElement('li');
  dot1.textContent = '•';
  dot1.classList.add('list1-dot');

  const roleLi = document.createElement('li');
  roleLi.textContent = project.mobileRole;
  roleLi.classList.add('list1-other');

  const dot2 = document.createElement('li');
  dot2.textContent = '•';
  dot2.classList.add('list1-dot');

  const yearLi = document.createElement('li');
  yearLi.textContent = project.mobileYear;
  yearLi.classList.add('list1-other');

  mobileMetaList.append(clientLi, dot1, roleLi, dot2, yearLi);

  const desc = document.createElement('p');
  desc.textContent = project.mobileDesc;

  const techList = document.createElement('ul');
  techList.classList.add('list2');

  project.mobileTechnologies.forEach(tech => {
    const techLi = document.createElement('li');
    techLi.textContent = tech;
    techList.appendChild(techLi);
  });

  const button = document.createElement('button');
  button.type = "button";
  button.classList.add('other-button');
  button.textContent= "See project";
  button.addEventListener('click', () => openMobilePopup(project));

  card.append(img, title, mobileMetaList, desc,techList, button);
  mobileProjects.appendChild(card);
};

const desktopProjects = document.querySelector('.desktop-works');
projects.forEach((project, index) => {

  const card = document.createElement('section');
  card.classList.add('work-content');
  if (index % 2 !== 0) {
    card.classList.add('reversed');
  };

  const content1 = document.createElement('figure');

  const img = document.createElement('img');
  img.src = project.desktopImage;
  img.alt = project.desktopName;

  content1.appendChild(img);
  
  const content2 = document.createElement('aside');

  const title = document.createElement('h2');
  title.textContent = project.desktopName;

  const desktopMetaList = document.createElement('ul');
  desktopMetaList.classList.add('list1');

  const clientLi = document.createElement('li');
  clientLi.textContent = project.desktopClient;
  clientLi.classList.add('list1-bold');

  const dot1 = document.createElement('li');
  dot1.textContent = '•';
  dot1.classList.add('list1-dot');

  const role = document.createElement('li');
  role.textContent = project.desktopRole;
  role.classList.add('list1-other');

  const dot2 = document.createElement('li');
  dot2.textContent = '•';
  dot2.classList.add('list1-dot');

  const yearLi = document.createElement('li');
  yearLi.textContent = project.desktopYear;
  yearLi.classList.add('list1-other');

  desktopMetaList.append(clientLi, dot1, role, dot2, yearLi);

  const desc = document.createElement('p');
  desc.textContent = project.desktopDesc;

  const techList = document.createElement('ul');
  techList.classList.add('list2');

  project.desktopTechnologies.forEach(tech => {
    const techLi = document.createElement('li');
    techLi.textContent = tech;
    techList.appendChild(techLi);
  }
  );

  const button = document.createElement('button');
  button.textContent = 'See project';
  button.type = 'button';
  button.classList.add('other-button');
  button.addEventListener('click', () => openDesktopPopup(project));

  content2.append(title, desktopMetaList, desc, techList, button);

  card.append(content1, content2);

  desktopProjects.appendChild(card);
}
);

const menuButton = document.getElementById('menu-button');
const nav = document.querySelector('nav');
const menuLinks = document.querySelectorAll("nav ul li a");

const toggleMenu = () => {
    nav.classList.toggle("open");
    menuButton.classList.toggle("open");
}

menuButton.addEventListener("click", toggleMenu);

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.classList.remove("open");
    });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    nav.classList.remove("open");
    menuButton.classList.remove("open");
    mobilePopup.style.display = 'none';
    document.body.style.overflow = '';
  } else if (window.innerWidth < 768) {
    desktopPopup.style.display = 'none';
    document.body.style.overflow = '';
  }
});