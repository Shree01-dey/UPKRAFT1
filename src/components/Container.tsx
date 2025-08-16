import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./Container.module.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type Lesson = {
  date: string;
  time: string;
  course: string;
  studentName: string;
};

const lessons: Lesson[] = [
  {
    date: '21 July',
    time: '2:00 - 3:00 Pm',
    course: 'Introduction to Piano',
    studentName: 'Eunice Sobel & Arnold Hayes'
  },
  {
    date: '22 July',
    time: '4:00 - 5:00 Pm',
    course: 'Finger Warmups',
    studentName: 'Eunice Sobel & Arnold Hayes'
  },
  {
    date: '23 July',
    time: '3:00 - 4:00 Pm',
    course: 'Simple Chords',
    studentName: 'Eunice Sobel & Arnold Hayes'
  },
  {
    date: '24 July',
    time: '5:00 - 6:00 Pm',
    course: 'Rhythm Basics',
    studentName: 'Eunice Sobel & Arnold Hayes'
  },
  {
    date: '25 July',
    time: '2:00 - 3:00 Pm',
    course: 'Simple Melodies',
    studentName: 'Eunice Sobel & Arnold Hayes'
  },
  {
    date: '26 July',
    time: '7:00 - 8:00 Pm',
    course: 'Treble & Bass Clef',
    studentName: 'Eunice Sobel & Arnold Hayes'
  },
  {
    date: '24 July',
    time: '5:00 - 6:00 Pm',
    course: 'Rhythm Basics',
    studentName: 'Eunice Sobel & Arnold Hayes'
  },
  {
    date: '22 July',
    time: '4:00 - 5:00 Pm',
    course: 'Finger Warmups',
    studentName: 'Eunice Sobel & Arnold Hayes'
  }
];

function Container() {
  return (
    <div className={styles.container}>
      <div className={styles.Navbar}>
        <div className={styles.search}>
          <Icon className={styles.is} icon={"material-symbols:search-rounded"} />
          <input type="text" placeholder="Search here" />
        </div>
        <div className={styles.right}>
          <Icon className={styles.icon} icon={"streamline-flex-color:mail-send-email-message-circle-flat"} />
          <Icon className={styles.icon} icon={"mage:notification-bell-pending"} />
          <p className="line">|</p>
          <div className={styles.user}>
            <Icon className={styles.icon} icon={"iconamoon:profile-circle-fill"} />
            <div className={styles.name}>
              <p>Sherry Wolf</p>
              <p>Tutor</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className ={`${styles.box} ${styles.box1}`}>
          <div className={styles.profile}>
            <div className={styles.profileHeader}>
              <h3>Profile</h3>
            </div>
            <div className={styles.profileContent}>
              <div className={styles.profileLeft}>
                <div className={styles.profileImage}>
                <div className={styles.imageContainer}>
                  <div className={styles.profileCircle}>
                    <span>Profile</span>
                  </div>
                  <div className={styles.statusBadge}>
                    <Icon icon="material-symbols:check" />
                  </div>
                </div>
              </div>
              <div className={styles.profileInfo}>
                <h2>Sherry Wolf</h2>
                <p>Piano Tutor</p>
              </div>
              </div>
              <div className={styles.profileStats}>
                <div className={styles.stat}>
                  <Icon icon="material-symbols:group" className={styles.statIcon} />
                  <div className={styles.statContent}>
                    <span className={styles.statLabel}>Students</span>
                    <span className={styles.statValue}>30</span>
                  </div>
                </div>
                <div className={styles.stat}>
                  <Icon icon="material-symbols:book" className={styles.statIcon} />
                  <div className={styles.statContent}>
                    <span className={styles.statLabel}>Course</span>
                    <span className={styles.statValue}>6</span>
                  </div>
                </div>
                <div className={styles.stat}>
                  <Icon icon="material-symbols:trophy" className={styles.statIcon} />
                  <div className={styles.statContent}>
                    <span className={styles.statLabel}>Reward</span>
                    <span className={styles.statValue}>3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className ={`${styles.box} ${styles.box2}`}>
          <div className={styles.metric}>
            <div className={styles.title}>
                <h1>30</h1>
            </div>
            <div className={styles.subtitle}>
                <p>Total Active Students</p>
            </div>
          </div>
          <div className={styles.metric}>
            <div className={styles.title}>
                <h1>80%</h1>
            </div>
            <div className={styles.subtitle}>
                <p>Tutor CSAT Score</p>
            </div>
          </div>
          <div className={styles.metric}>
            <div className={styles.title}>
                <h1>15%</h1>
            </div>
            <div className={styles.subtitle}>
                <p>Assignment Completion rate</p>
            </div>
          </div>
          <div className={styles.metric}>
            <div className={styles.title}>
                <h1>30</h1>
            </div>
            <div className={styles.subtitle}>
                <p>Total Active Students</p>
            </div>
          </div>
          <div className={styles.metric}>
            <div className={styles.title}>
                <h1>80%</h1>
            </div>
            <div className={styles.subtitle}>
                <p>Tutor CSAT Score</p>
            </div>
          </div>
          <div className={styles.metric}>
            <div className={styles.title}>
                <h1>15%</h1>
            </div>
            <div className={styles.subtitle}>
                <p>Assignment Completion rate</p>
            </div>
          </div>
          
        </div>
        <div className ={`${styles.box} ${styles.box3}`}>
          <div className={styles.referCard}>
            <div className={styles.referHero}>
              <img
                src="/girl.jpg"
                alt="Refer and Earn"
              />
            </div>
            <div className={styles.referBody}>
              <h3 className={styles.referTitle}>Refer and Earn</h3>
              <p className={styles.referDesc}>
                Invite friends and earn exclusive rewards for every successful referral!
              </p>
              <button className={styles.referBtn}>
                Refer Now <Icon icon="material-symbols:arrow-forward" />
              </button>
            </div>
          </div>
        </div>
        <div className ={`${styles.box} ${styles.box4}`}>
          <div className={styles.lessonsTable}>
            <div className={styles.tableHeader}>
              <h3>Upcoming Lessons</h3>
              <a href="#" className={styles.viewAll}>View All</a>
            </div>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Course</th>
                  <th>Student Name</th>
                </tr>
              </thead>
              <tbody>
                {lessons.map((lesson, index) => (
                  <tr key={index}>
                    <td>{lesson.date}</td>
                    <td>{lesson.time}</td>
                    <td>{lesson.course}</td>
                    <td>{lesson.studentName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className ={`${styles.box} ${styles.box5}`}>
          <div className={styles.performanceSection}>
            <div className={styles.performanceGrid}>
              <div className={styles.leftPanel}>
                <div className={styles.performanceItem}>
                  <h4>Overall Course Performance</h4>
                  <div className={styles.semiGauge}>
                    <CircularProgressbar
                      value={76}
                      circleRatio={0.5}
                      strokeWidth={6}
                      styles={buildStyles({
                        rotation: 0.75,
                        strokeLinecap: 'round',
                        trailColor: '#fde68a',
                        pathColor: '#f6b625',
                      })}
                    />
                    <div className={styles.semiGaugeValue}>
                      <span className={styles.score}>7.6</span>
                      <span className={styles.total}>/10</span>
                    </div>
                  </div>
                </div>
                <div className={styles.performanceItem}>
                  <h4>Overall Student Performance</h4>
                  <div className={styles.semiGauge}>
                    <CircularProgressbar
                      value={66}
                      circleRatio={0.5}
                      strokeWidth={6}
                      styles={buildStyles({
                        rotation: 0.75,
                        strokeLinecap: 'round',
                        trailColor: '#fde68a',
                        pathColor: '#f6b625',
                      })}
                    />
                    <div className={styles.semiGaugeValue}>
                      <span className={styles.score}>6.6</span>
                      <span className={styles.total}>/10</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.rightPanel}>
                <div className={styles.performanceItem}>
                  <h4>Feedback Pending</h4>
                  <div className={styles.fullGauge}>
                    <div className={styles.circleWrap}>
                      <CircularProgressbar
                        value={80}
                        strokeWidth={6}
                        styles={buildStyles({
                          rotation: 0.25,
                          strokeLinecap: 'round',
                          trailColor: '#eef0f2',
                          pathColor: '#ef4444',
                        })}
                      />
                      <div className={styles.fullGaugeValue}>
                        <div className={styles.feedbackCount}>12</div>
                        <div className={styles.feedbackLabel}>Feedback Pending</div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className={styles.feedbackButton}>
                  Give Feedback <Icon icon="material-symbols:arrow-forward" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
