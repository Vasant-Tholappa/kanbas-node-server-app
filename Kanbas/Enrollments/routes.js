import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    enrollmentsDao.enrollUserInCourse(userId, courseId);
  });

  app.delete("/api/enrollments/:userId/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    enrollmentsDao.unenrollUser(userId, courseId);
  });

  app.get("/api/enrollments", (req, res) => {
    const enrollments = enrollmentsDao.findAllEnrollments();
    res.json(enrollments);
  });

  app.get("/api/enrollments/:userId", (req, res) => {
    const { userId } = req.params;
    const enrollments = enrollmentsDao.findUserEnrollments(userId);
    res.json(enrollments);
  });
}
