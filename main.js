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
mobilePopupLiveBtn.innerHTML = 'See live<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Icon" fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z" fill="currentColor"/></svg>';
mobilePopupLiveBtn.classList.add('live-btn');
const mobilePopupSourceBtn = document.createElement('button');
mobilePopupSourceBtn.classList.add('live-btn');
mobilePopupSourceBtn.innerHTML = 'See source<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="currentColor"/>';
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

    mobilePopupLiveBtn.onclick = () => window.open(project.liveLink, '_blank');
    mobilePopupSourceBtn.onclick = () => window.open(project.sourceLink, '_blank');
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
desktopPopupLiveBtn.innerHTML = 'See live<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Icon" fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z" fill="currentColor"/></svg>'
desktopPopupLiveBtn.classList.add('live-btn');
const desktopPopupSourceBtn = document.createElement('button');
desktopPopupSourceBtn.classList.add('live-btn');
desktopPopupSourceBtn.innerHTML = 'See source<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M20.9989 9.46114C20.9989 8.32124 20.6329 7.25043 19.9342 6.31779C20.2004 5.41969 20.2669 4.27979 20.2004 2.96718C20.1671 2.41451 19.7345 2 19.2022 2C18.9028 2 16.3741 2.03454 14.9101 3.38169C13.6458 3.1399 12.315 3.1399 11.0174 3.38169C9.58667 2.03454 7.05802 2 6.7253 2C6.19296 2 5.76042 2.41451 5.72715 2.96718C5.62734 4.27979 5.72715 5.41969 5.99333 6.31779C5.29462 7.28497 4.92863 8.35579 4.92863 9.46114C4.92863 11.8791 6.7253 14.0553 9.45358 15.0915C9.35377 15.2988 9.28723 15.5406 9.22068 15.7824C6.32604 15.4715 4.9619 12.7427 4.89536 12.639C4.66246 12.1209 4.06357 11.9136 3.56449 12.19C3.06541 12.4318 2.86578 13.0535 3.13196 13.5717C3.1985 13.7444 5.02845 17.4404 9.05432 17.8549V20.9637C9.05432 21.5509 9.48686 22 10.0525 22H15.875C16.4406 22 16.8732 21.5509 16.8732 20.9637V16.8532C16.8732 16.2314 16.7401 15.6442 16.5072 15.1261C19.2022 14.0553 20.9989 11.9136 20.9989 9.46114Z" fill="currentColor"/></svg>';desktopPopupButtons.append(desktopPopupLiveBtn, desktopPopupSourceBtn);
desktopPopupTechBtn.append(desktopPopupTechList, desktopPopupButtons);
desktopPopupParaTechBtn.append(desktopPopupDesc, desktopPopupTechBtn);
desktopPopupWindow.append(desktopPopupHead, desktopPopupClientRoleYear, desktopPopupImage, desktopPopupParaTechBtn);
desktopPopup.appendChild(desktopPopupWindow);

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