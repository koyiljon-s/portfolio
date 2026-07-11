"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

const achievements = [
  {
    subtitle: "Award",
    title: "Woosong University Standard Field Co-op internship competition award",
    location: "Daejeon, South Korea",
    timing: "Jun 18, 2025",
    image: "/wsu-award.jpg",
  },
  {
    subtitle: "Startup",
    title: "Joined Google Start up Campus Member, Seoul",
    location: "Seoul, South Korea",
    timing: "Dec 2025",
    link: "https://startup.google.com/",
  },
  {
    subtitle: "Career",
    title: "Started working as a Software Engineer at Bee Intelligence Global",
    location: "Seoul, South Korea",
    timing: "Sep 1, 2025",
    link: "https://humblebee.ai/",
  },
];

export default function Achievements() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  return (
    <Box
      component="section"
      id="achievements"
      sx={{
        py: { xs: 10, md: 12 },
        background: "#000",
        borderTop: "2px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontWeight: 500,
            letterSpacing: "-0.05em",
            fontSize: { xs: "2rem", md: "2.25rem" },
            pb: 10,
            textAlign: "center",
          }}
        >
          Achievements
        </Typography>
        <TableContainer
          sx={{
            border: "1px solid",
            borderColor: "grey.800",
          }}
        >
          <Table>
            
            <TableBody>
              {achievements.map((row) => (
                <TableRow
                  key={row.title}
                  onClick={() => {
                    if (row.image) setOpenImage(row.image);
                    else if (row.link) window.open(row.link, "_blank", "noopener,noreferrer");
                  }}
                  sx={{
                    borderBottom: "1px solid",
                    borderColor: "grey.800",
                    "&:last-child": { borderBottom: "none" },
                    ...((row.image || row.link) && { cursor: "pointer", "&:hover": { backgroundColor: "rgba(255,255,255,0.04)" } }),
                  }}
                >
                  <TableCell sx={{ color: "#deeb4d", fontWeight: 600, textTransform: "uppercase", fontSize: "0.8rem" }}>
                    {row.subtitle}
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 500, fontSize: "1.1rem" }}>
                    {row.title}
                  </TableCell>
                  <TableCell sx={{ color: "grey.400", fontSize: "0.9rem", whiteSpace: "nowrap" }}>
                    {row.location}
                  </TableCell>
                  <TableCell sx={{ color: "grey.400", fontSize: "0.9rem", whiteSpace: "nowrap" }}>
                    {row.timing}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Modal
        open={!!openImage}
        onClose={() => setOpenImage(null)}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        slotProps={{
          backdrop: {
            sx: { backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" },
          },
        }}
      >
        <Box
          component="img"
          src={openImage ?? ""}
          sx={{ maxWidth: "60vw", maxHeight: "60vh", borderRadius: 1, outline: "none" }}
          onClick={() => setOpenImage(null)}
        />
      </Modal>
    </Box>
  );
}
