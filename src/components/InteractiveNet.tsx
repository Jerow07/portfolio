import React, { useEffect, useRef } from 'react';

class Vector {
  constructor(public x: number, public y: number) {}
  static sub(v1: Vector, v2: Vector) {
    return new Vector(v1.x - v2.x, v1.y - v2.y);
  }
  add(v: Vector) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  mult(n: number) {
    this.x *= n;
    this.y *= n;
    return this;
  }
  setXY(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Particle {
  pos: Vector;
  oldPos: Vector;
  originalPos: Vector;
  pinned: boolean;
  friction = 0.85;
  baseRadius = 1.5;

  constructor(x: number, y: number, pinned = false) {
    this.pos = new Vector(x, y);
    this.oldPos = new Vector(x, y);
    this.originalPos = new Vector(x, y);
    this.pinned = pinned;
  }

  update(mouse: { pos: Vector; radius: number }) {
    if (this.pinned) return;
    
    // Verlet integration step (as per snippet)
    let vel = Vector.sub(this.pos, this.oldPos);
    this.oldPos.setXY(this.pos.x, this.pos.y);

    vel.mult(this.friction);

    // Act like "Gravity" towards origin to keep the mesh structured
    let springDir = Vector.sub(this.originalPos, this.pos);
    springDir.mult(0.04);
    vel.add(springDir);

    // Mouse Interaction (as per snippet)
    let dx = mouse.pos.x - this.pos.x;
    let dy = mouse.pos.y - this.pos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 0 && dist < mouse.radius) {
      const direction = new Vector(dx / dist, dy / dist);
      const force = Math.max((mouse.radius - dist) / mouse.radius, 0);

      // Snippet logic: snap if very strong, else add directional force
      if (force > 0.6) {
        this.pos.setXY(mouse.pos.x, mouse.pos.y);
      } else {
        this.pos.add(vel);
        this.pos.add(direction.mult(force * 10)); // Amplified for visual effect
      }
    } else {
      this.pos.add(vel);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.baseRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(250, 204, 21, 0.8)';
    ctx.fill();
  }
}

export function InteractiveNet() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let particles: Particle[] = [];
    const spacing = 45;

    const initGrid = () => {
      // Usamos el width exacto del parent
      const parent = canvas.parentElement;
      if (!parent) return;
      
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width;
      canvas.height = height;

      cols = Math.floor(width / spacing) + 1;
      rows = Math.floor(height / spacing) + 1;
      particles = [];

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let x = i * spacing;
          let y = j * spacing;
          let isPinned = (i === 0 || j === 0 || i === cols - 1 || j === rows - 1);
          particles.push(new Particle(x, y, isPinned));
        }
      }
    };

    const mouse = {
      pos: new Vector(-1000, -1000),
      radius: 140
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.pos.x = e.clientX - rect.left;
      mouse.pos.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.pos.x = -1000;
      mouse.pos.y = -1000;
    };

    const isDarkMode = () => document.documentElement.classList.contains('dark');

    const drawLines = () => {
      const dark = isDarkMode();
      ctx!.lineWidth = 0.5;
      ctx!.strokeStyle = dark ? 'rgba(250, 204, 21, 0.15)' : 'rgba(202, 138, 4, 0.1)';
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let idx = i * rows + j;
          let p = particles[idx];
          
          if (i < cols - 1) {
            let right = particles[(i + 1) * rows + j];
            ctx!.beginPath();
            ctx!.moveTo(p.pos.x, p.pos.y);
            ctx!.lineTo(right.pos.x, right.pos.y);
            ctx!.stroke();
          }
          if (j < rows - 1) {
            let bottom = particles[i * rows + (j + 1)];
            ctx!.beginPath();
            ctx!.moveTo(p.pos.x, p.pos.y);
            ctx!.lineTo(bottom.pos.x, bottom.pos.y);
            ctx!.stroke();
          }
        }
      }
    };

    let animationId: number;
    const render = () => {
      const dark = isDarkMode();
      ctx.clearRect(0, 0, width, height);
      
      for (const p of particles) {
        p.update(mouse);
      }

      drawLines();
      
      for (const p of particles) {
        // Updated draw logic inside render for simplicity or keep it in Particle.draw
        ctx.beginPath();
        ctx.arc(p.pos.x, p.pos.y, p.baseRadius, 0, Math.PI * 2);
        ctx.fillStyle = dark ? 'rgba(250, 204, 21, 0.8)' : 'rgba(202, 138, 4, 0.4)';
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    initGrid();
    render();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', initGrid);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', initGrid);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  );
}
