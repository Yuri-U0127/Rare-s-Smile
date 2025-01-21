import React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { Textarea } from '@mui/joy';

const NoteCard = ({ icon, title, content, color, minHeight, borderWidth, isEditable, placeholder, button, width }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: width || "auto",
        minHeight: minHeight,
        paddingTop: "0",
        paddingInline: "16px",
        border: "none",
        borderWidth: borderWidth || "6px",
        borderStyle: "solid",
        borderRight: "none",
        borderTop: "none",
        borderBottom: "none",
        borderRadius: '0 8px 8px 0',
        borderLeftColor: color ? "var(--lightpinkc)" : "var(--lightc)",
        boxShadow: "1px 1px 3px 1px var(--lightc)"
      }}
    >
      {icon && (
        <Box
          sx={{
            flexShrink: 0,
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
        </Box>
      )}
      <Box>
        <Typography
          component="h3"
          level="body2"
          sx={{
            padding: "0px 10px 0px 10px",
            fontWeight: 'bold',
            backgroundColor: color ? "var(--lightpinkc)" : "var(--lightc)",
            borderRadius: "5px",
            width: "fit-content",
            color: color ? "var(--darkpinkc)" : "var(--darkc)",
            marginBottom: 0.5,
          }}
        >
          {title}
        </Typography>
        {!isEditable ? <Typography level="body2" sx={{ color: '#333' }}>
          {content}
        </Typography>
          : <Textarea
            placeholder={placeholder}
            minRows={10}
            sx={{
              borderBottom: '2px solid',
              borderColor: 'neutral.outlinedBorder',
              borderRadius: 0,
              border: "none",
              boxShadow: "none",
              '&:hover': {
                borderColor: 'neutral.outlinedHoverBorder',
              },
              '&::before': {
                transform: 'scaleX(0)',
                left: 0,
                right: 0,
                bottom: '-2px',
                top: 'unset',
                transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                borderRadius: 0,
              },
              '&:focus-within::before': {
                transform: 'scaleX(1)',
              },
              '&::after, &::before': {
                border: "none"
              }
            }}
          />}
      </Box>
      {button &&
        <div style={{ backgroundImage: "linear-gradient(180deg, #ffffff, #666)" }} className="flex gap-1 justify-center">
          <img src="/images/red_circle_record.svg" alt="" className='cursor-pointer' />
          <img src="/images/stop.svg" alt="" className='cursor-pointer' />
          <img src="/images/green_circle_resume.svg" alt="" className='cursor-pointer' />
        </div>
      }
    </Card>
  );
};

export default NoteCard;
