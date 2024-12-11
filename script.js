const eventsStore = [
  {
    title: 'INFJ Personality Type - Coffee Shop Meet & Greet',
    description: 'Being an INFJ',
    date: new Date(2024, 2, 23, 15),
    image:
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w',
    type: 'offline',
    attendees: 99,
    category: 'Hobbies and Passions',
    distance: 50,
  },
  {
    title:
      'NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience',
    description: 'New York AI Users',
    date: new Date(2024, 2, 23, 11, 30),
    image:
      'https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'offline',
    attendees: 43,
    category: 'Technology',
    distance: 25,
  },
  {
    title: 'Book 40+ Appointments Per Month Using AI and Automation',
    description: 'New Jersey Business Network',
    date: new Date(2024, 2, 16, 14),
    image:
      'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    attendees: 55,
    category: 'Technology',
    distance: 10,
  },
  {
    title: 'Dump writing group weekly meetup',
    description: 'Dump writing group',
    date: new Date(2024, 2, 13, 11),
    image:
      'https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    attendees: 77,
    category: 'Business',
    distance: 100,
  },
  {
    title: 'Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community',
    description: 'Over 40s, 50s, 60s Singles Chat, Meet & Dating Community',
    date: new Date(2024, 2, 14, 11),
    image:
      'https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    attendees: 140,
    category: 'Social Activities',
    distance: 75,
  },
  {
    title: 'All Nations - Manhattan Missions Church Bible Study',
    description: 'Manhattan Bible Study Meetup Group',
    date: new Date(2024, 2, 14, 11),
    image:
      'https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'offline',
    attendees: 33,
    category: 'Health and Wellbeing',
    distance: 15,
  },
  {
    title: 'Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community',
    description: 'Over 40s, 50s, 60s Singles Chat, Meet & Dating Community',
    date: new Date(2024, 2, 14, 11),
    image:
      'https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    attendees: 140,
    category: 'Social Activities',
    distance: 75,
  },
  {
    title: 'All Nations - Manhattan Missions Church Bible Study',
    description: 'Manhattan Bible Study Meetup Group',
    date: new Date(2024, 2, 14, 11),
    image:
      'https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'offline',
    attendees: 65,
    category: 'Health and Wellbeing',
    distance: 15,
  },
]

function renderEvents(events) {
  const eventsContainer = document.querySelector('.events_items')
  eventsContainer.innerHTML = '' // Container leeren

  events.forEach(event => {
    const eventCard = document.createElement('div')
    eventCard.classList.add(
      'event-card',
      event.type === 'online' ? 'event-online' : 'event-offline'
    )

    const eventDate = new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
      timeZone: 'UTC',
    }).format(event.date)

    eventCard.innerHTML = `
      <div class="event-image">
        <img src="${event.image}" alt="${event.title}">
        ${
          event.type === 'online'
            ? `
        <div class="event-online-badge">
          <img src="./assets/icons/_event/camera.svg" alt="Camera Icon" />
          Online Event
        </div>
        `
            : ''
        }
      </div>
      <div class="event-content">
        <h3 class="event-title">${event.title}</h3>
        <p class="event-category">${event.category} <span>(${
      event.distance
    } km)</span></p>
        <p class="event-date">
          <img src="./assets/icons/_event/date.svg" alt="" />
          ${eventDate}
        </p>
        <div class="event-details-row">
        <p class="event-attendees">
          <img src="./assets/icons/_event/going.svg" alt="" />
          ${event.attendees} going
        </p>
        <p class="event-free">
          <img src="./assets/icons/_event/free.svg" alt="" />
          Free
        </p>
        </div>

      </div>
    `

    eventsContainer.appendChild(eventCard)
  })
}

renderEvents(eventsStore)

const onlineEvent = [
  {
    title: 'Book 40+ Appointments Per Month Using AI and Automation',
    description: 'New Jersey Business Network',
    date: new Date(2024, 2, 16, 14),
    image:
      'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    attendees: 55,
    category: 'Technology',
    distance: 10,
  },
  {
    title: 'Dump writing group weekly meetup',
    description: 'Dump writing group',
    date: new Date(2024, 2, 13, 11),
    image:
      'https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    attendees: 77,
    category: 'Business',
    distance: 100,
  },
  {
    title: 'Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community',
    description: 'Over 40s, 50s, 60s Singles Chat, Meet & Dating Community',
    date: new Date(2024, 2, 14, 11),
    image:
      'https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    attendees: 140,
    category: 'Social Activities',
    distance: 75,
  },
  {
    title: 'Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community',
    description: 'Over 40s, 50s, 60s Singles Chat, Meet & Dating Community',
    date: new Date(2024, 2, 14, 11),
    image:
      'https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    attendees: 140,
    category: 'Social Activities',
    distance: 75,
  },
]

function renderUpcoming(events) {
  const upcomingEventsContainer = document.querySelector(
    '.upcomingEvents_items'
  )
  upcomingEventsContainer.innerHTML = '' // Container leeren

  events.forEach(event => {
    const eventCard = document.createElement('div')
    eventCard.classList.add(
      'event-card',
      event.type === 'online' ? 'event-online' : 'event-offline'
    )

    const eventDate = new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
      timeZone: 'UTC',
    }).format(event.date)

    eventCard.innerHTML = `
      <div class="event-image">
        <img src="${event.image}" alt="${event.title}">
        ${
          event.type === 'online'
            ? `
        <div class="event-online-badge">
          <img src="./assets/icons/_event/camera.svg" alt="Camera Icon" />
          Online Event
        </div>
        `
            : ''
        }
      </div>
      <div class="event-content">
        <h3 class="event-title">${event.title}</h3>
        <p class="event-category">${event.category} <span>(${
      event.distance
    } km)</span></p>
        <p class="event-date">
          <img src="./assets/icons/_event/date.svg" alt="" />
          ${eventDate}
        </p>
        <div class="event-details-row">
        <p class="event-attendees">
          <img src="./assets/icons/_event/going.svg" alt="" />
          ${event.attendees} going
        </p>
        <p class="event-free">
          <img src="./assets/icons/_event/free.svg" alt="" />
          Free
        </p>
        </div>

      </div>
    `

    upcomingEventsContainer.appendChild(eventCard)
  })
}

renderUpcoming(onlineEvent)
