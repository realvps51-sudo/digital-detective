// High-Resolution Arabic Certificate Generator using HTML5 Canvas

export interface CertificateData {
  studentName: string;
  score: number;
  maxScore: number;
  dateStr?: string;
}

export async function generateCertificateCanvas(data: CertificateData): Promise<HTMLCanvasElement> {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 850;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context not available');

  // Wait for fonts to ensure Cairo is rendered correctly
  if (document.fonts) {
    try {
      await document.fonts.ready;
    } catch {
      // Ignore fallback if fonts fail
    }
  }

  const { width, height } = canvas;

  // 1. Background Fill - Cream parchment color
  ctx.fillStyle = '#FFFDF9';
  ctx.fillRect(0, 0, width, height);

  // Subtle background pattern/tint
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, '#FFFDF5');
  bgGrad.addColorStop(0.5, '#FBF7EE');
  bgGrad.addColorStop(1, '#F7F0DF');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(20, 20, width - 40, height - 40);

  // 2. Outer Ornate Golden Borders
  ctx.strokeStyle = '#D97706'; // Amber 600
  ctx.lineWidth = 10;
  ctx.strokeRect(30, 30, width - 60, height - 60);

  ctx.strokeStyle = '#FDE68A'; // Amber 200 thin inner line
  ctx.lineWidth = 3;
  ctx.strokeRect(44, 44, width - 88, height - 88);

  ctx.strokeStyle = '#B45309'; // Amber 700 outer line
  ctx.lineWidth = 2;
  ctx.strokeRect(52, 52, width - 104, height - 104);

  // Decorative corner accents
  const cornerSize = 40;
  ctx.fillStyle = '#D97706';
  // Top-Left
  ctx.fillRect(30, 30, cornerSize, 10);
  ctx.fillRect(30, 30, 10, cornerSize);
  // Top-Right
  ctx.fillRect(width - 30 - cornerSize, 30, cornerSize, 10);
  ctx.fillRect(width - 40, 30, 10, cornerSize);
  // Bottom-Left
  ctx.fillRect(30, height - 40, cornerSize, 10);
  ctx.fillRect(30, height - 30 - cornerSize, 10, cornerSize);
  // Bottom-Right
  ctx.fillRect(width - 30 - cornerSize, height - 40, cornerSize, 10);
  ctx.fillRect(width - 40, height - 30 - cornerSize, 10, cornerSize);

  // 3. Set text properties for RTL Arabic
  ctx.direction = 'rtl';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Header Detective Icon & Title
  ctx.font = '54px "Segoe UI Emoji", "Apple Color Emoji", sans-serif';
  ctx.fillText('🕵️‍♂️ 🛡️ 🏆', width / 2, 115);

  // Main Title: شهادة المحقق الرقمي البطل
  ctx.fillStyle = '#1E293B';
  ctx.font = 'bold 44px "Cairo", sans-serif';
  ctx.fillText('شهادة تميـّز: المحقق الرقمي البطل', width / 2, 195);

  // Subtitle decoration line
  ctx.strokeStyle = '#F59E0B';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(width / 2 - 220, 230);
  ctx.lineTo(width / 2 + 220, 230);
  ctx.stroke();

  // Intro text
  ctx.fillStyle = '#475569';
  ctx.font = '600 24px "Cairo", sans-serif';
  ctx.fillText('تَشْهَدُ منصة "المحقق الرقمي" للسلامة والأمن السيبراني بأن البطل:', width / 2, 280);

  // Student Name
  const studentName = data.studentName.trim() || 'بطل الأمن الرقمي';
  ctx.fillStyle = '#1D4ED8'; // Royal Blue
  ctx.font = 'bold 48px "Cairo", sans-serif';
  ctx.fillText(studentName, width / 2, 350);

  // Decorative name underline
  ctx.strokeStyle = '#93C5FD';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(width / 2 - 250, 390);
  ctx.lineTo(width / 2 + 250, 390);
  ctx.stroke();

  // Descriptive Achievement Paragraph
  ctx.fillStyle = '#334155';
  ctx.font = '500 24px "Cairo", sans-serif';
  ctx.fillText('قد اجتاز بنجاح كافة اختبارات حماية البيانات والتصدي للمخاطر الرقمية،', width / 2, 440);
  ctx.fillText('وساعد صديقه "آدم" في كشف الرسائل المجهولة، الروابط المشبوهة، والملفات الخطيرة،', width / 2, 480);
  ctx.fillText('واستحق عن جدارة لقب: محقق سيبراني خبير وموثوق 🌟', width / 2, 520);

  // Score Badge Banner in Center
  const scoreBoxY = 590;
  ctx.fillStyle = '#FEF3C7';
  ctx.strokeStyle = '#D97706';
  ctx.lineWidth = 3;
  const boxW = 380;
  const boxH = 65;
  const boxX = (width - boxW) / 2;
  
  // Rounded rect for score
  ctx.beginPath();
  ctx.roundRect(boxX, scoreBoxY - boxH / 2, boxW, boxH, 16);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#92400E';
  ctx.font = 'bold 28px "Cairo", sans-serif';
  ctx.fillText(`مجموع النقاط: ${data.score} / ${data.maxScore}`, width / 2, scoreBoxY);

  // Footer: Stamp & Date
  // Date on the right
  const dateStr = data.dateStr || new Date().toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  ctx.textAlign = 'right';
  ctx.fillStyle = '#64748B';
  ctx.font = '600 20px "Cairo", sans-serif';
  ctx.fillText(`تاريخ الإصدار: ${dateStr}`, width - 100, 725);
  ctx.font = '500 18px "Cairo", sans-serif';
  ctx.fillText('منصة المحقق الرقمي التعليمية', width - 100, 755);

  // Golden Security Seal on the left
  const sealX = 170;
  const sealY = 725;
  // Outer seal circle
  ctx.beginPath();
  ctx.arc(sealX, sealY, 46, 0, Math.PI * 2);
  ctx.fillStyle = '#F59E0B';
  ctx.fill();
  ctx.strokeStyle = '#B45309';
  ctx.lineWidth = 4;
  ctx.stroke();

  // Inner dotted circle
  ctx.beginPath();
  ctx.arc(sealX, sealY, 38, 0, Math.PI * 2);
  ctx.strokeStyle = '#FEF3C7';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Seal Text
  ctx.textAlign = 'center';
  ctx.fillStyle = '#78350F';
  ctx.font = 'bold 15px "Cairo", sans-serif';
  ctx.fillText('ختم الأمان', sealX, sealY - 10);
  ctx.fillText('الرقمي ✓', sealX, sealY + 12);

  return canvas;
}

export async function downloadCertificateAsPNG(data: CertificateData, filename = 'shahadat-al-muhaqqiq-al-raqami.png') {
  const canvas = await generateCertificateCanvas(data);
  const dataUrl = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

