// High-Resolution Arabic Certificate Generator using HTML5 Canvas
// Designed to match the Storyboard Panel 8 Diploma aesthetic

export interface CertificateData {
  studentName: string;
  score: number;
  maxScore: number;
  dateStr?: string;
}

export async function generateCertificateCanvas(data: CertificateData): Promise<HTMLCanvasElement> {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 800;
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

  // 1. Outer Golden Frame (Matching Panel 8 Certificate Border)
  ctx.fillStyle = '#F6BE3C';
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = '#261306';
  ctx.lineWidth = 14;
  ctx.strokeRect(7, 7, width - 14, height - 14);

  // 2. Inner Cream Parchment
  const margin = 40;
  ctx.fillStyle = '#FFFDF7';
  ctx.fillRect(margin, margin, width - margin * 2, height - margin * 2);

  ctx.strokeStyle = '#261306';
  ctx.lineWidth = 6;
  ctx.strokeRect(margin, margin, width - margin * 2, height - margin * 2);

  // 3. Ornate Golden Inner Inset Frame with Curved Corners
  const innerMargin = 65;
  ctx.strokeStyle = '#D97706';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.roundRect(innerMargin, innerMargin, width - innerMargin * 2, height - innerMargin * 2, 24);
  ctx.stroke();

  // Thin secondary inner border
  ctx.strokeStyle = '#FDE68A';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(innerMargin + 8, innerMargin + 8, width - (innerMargin + 8) * 2, height - (innerMargin + 8) * 2, 16);
  ctx.stroke();

  // 4. Set text properties for RTL Arabic
  ctx.direction = 'rtl';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // 5. Main Title: شهادة المحقق الرقمي البطل
  ctx.fillStyle = '#1E293B';
  ctx.font = 'bold 54px "Cairo", sans-serif';
  ctx.fillText('شهادة المحقق الرقمي البطل', width / 2, 170);

  // Title separator line
  ctx.strokeStyle = '#D97706';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(width / 2 - 220, 215);
  ctx.lineTo(width / 2 + 220, 215);
  ctx.stroke();

  // 6. Student Name Section
  const studentName = data.studentName.trim() || 'المحقق البطل';
  ctx.fillStyle = '#0284C7'; // Cyan/Blue
  ctx.font = 'bold 44px "Cairo", sans-serif';
  ctx.fillText(`تُمنح للبطل: ${studentName}`, width / 2, 280);

  // 7. Score Banner (Matching "مجموع النقاط: 50/50")
  ctx.fillStyle = '#1E293B';
  ctx.font = 'bold 36px "Cairo", sans-serif';
  ctx.fillText(`مجموع النقاط: ${data.score} / ${data.maxScore}`, width / 2, 355);

  // 8. Praise Sentence (Matching "أداء ممتاز! لقد حميت آدم!")
  ctx.fillStyle = '#1E293B';
  ctx.font = 'bold 38px "Cairo", sans-serif';
  ctx.fillText('أداء ممتاز! لقد حميت آدم!', width / 2, 430);

  // Subtitle achievement text
  ctx.fillStyle = '#475569';
  ctx.font = '600 22px "Cairo", sans-serif';
  ctx.fillText('واجتزت كافة اختبارات السلامة السيبرانية وحماية البيانات من المخاطر الرقمية بنجاح 🛡️', width / 2, 490);

  // 9. Golden Medal with Red Ribbons in Bottom Center (Matching Storyboard Medal)
  const medalX = width / 2;
  const medalY = 620;

  // Red Ribbon Tails
  ctx.fillStyle = '#DC2626';
  ctx.strokeStyle = '#7F1D1D';
  ctx.lineWidth = 3;

  // Left Ribbon Tail
  ctx.beginPath();
  ctx.moveTo(medalX - 12, medalY + 20);
  ctx.lineTo(medalX - 35, medalY + 80);
  ctx.lineTo(medalX - 10, medalY + 68);
  ctx.lineTo(medalX + 5, medalY + 80);
  ctx.lineTo(medalX - 2, medalY + 20);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Right Ribbon Tail
  ctx.fillStyle = '#B91C1C';
  ctx.beginPath();
  ctx.moveTo(medalX + 12, medalY + 20);
  ctx.lineTo(medalX + 35, medalY + 80);
  ctx.lineTo(medalX + 10, medalY + 68);
  ctx.lineTo(medalX - 5, medalY + 80);
  ctx.lineTo(medalX + 2, medalY + 20);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Decorative Horizontal Lines on Left and Right of Medal
  ctx.strokeStyle = '#D97706';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(medalX - 240, medalY);
  ctx.lineTo(medalX - 65, medalY);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(medalX + 65, medalY);
  ctx.lineTo(medalX + 240, medalY);
  ctx.stroke();

  // Scalloped Gold Medal Circle
  ctx.beginPath();
  ctx.arc(medalX, medalY, 44, 0, Math.PI * 2);
  ctx.fillStyle = '#F59E0B';
  ctx.fill();
  ctx.strokeStyle = '#B45309';
  ctx.lineWidth = 5;
  ctx.stroke();

  // Inner ring
  ctx.beginPath();
  ctx.arc(medalX, medalY, 34, 0, Math.PI * 2);
  ctx.strokeStyle = '#FEF3C7';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Checkmark in medal
  ctx.strokeStyle = '#78350F';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(medalX - 12, medalY + 2);
  ctx.lineTo(medalX - 3, medalY + 12);
  ctx.lineTo(medalX + 14, medalY - 8);
  ctx.stroke();

  // 10. Date on the right
  const dateStr = data.dateStr || new Date().toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  ctx.textAlign = 'right';
  ctx.fillStyle = '#64748B';
  ctx.font = '600 20px "Cairo", sans-serif';
  ctx.fillText(`تاريخ الإصدار: ${dateStr}`, width - 90, 715);

  // Platform title on the left
  ctx.textAlign = 'left';
  ctx.fillText('منصة المحقق الرقمي للسلامة السيبرانية', 90, 715);

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
