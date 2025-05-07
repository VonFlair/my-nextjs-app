'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import Footer from '@/app/components/Footer';
import NavBar from "@/app/components/Navbar"

export type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
  field?: string[]; 
};

export type Stage = {
  id: string;
  type: 'buyer' | 'seller';
  title: string;
  description: string;
  aiBenefit: string;
  duration: number;
  traditionalDuration: number;
  isCompleted: boolean;
  tasks: Task[]; // injected client‑side
};


const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080/api';

async function api<T>(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${API}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });
  if (!res.ok) throw new Error(`${res.status}`);
  return (await res.json()) as T;
}



export default function StageTracker() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'buyer' | 'seller'>('buyer');
  const [stages, setStages] = useState<Stage[]>([]);
  const [loading, setLoading] = useState(true);

  /* fetch */
  const refresh = async (type: 'buyer' | 'seller') => {
    setLoading(true);
    try {
      const [stageData, taskData] = await Promise.all([
        api<Stage[]>(`/stages?type=${type}`),
        api<Task[]>(`/tasks`),
      ]);
      // attach tasks via field relation
      const merged = stageData.map((s) => ({
        ...s,
        tasks: taskData.filter((t) => t.field?.includes(s.id)),
      }));
      setStages(merged);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    refresh(activeTab);
  }, [activeTab]);

  /* toggle completion */
  const toggleStage = async (stage: Stage) => {
    await api(`/stages/${stage.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ isCompleted: !stage.isCompleted }),
    });
    refresh(activeTab);
  };
  const toggleTask = async (task: Task) => {
    await api(`/tasks/${task.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ isCompleted: !task.isCompleted }),
    });
    refresh(activeTab);
  };


  const overallPercent = stages.length
    ? Math.round((stages.filter((s) => s.isCompleted).length / stages.length) * 100)
    : 0;


  return (
    
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 md:px-10">
      <NavBar isVisible={isVisible}/>
      <header className="mx-auto mb-8 flex max-w-5xl items-center justify-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
          {activeTab === 'buyer' ? 'Buyer' : 'Seller'} Workflow
        </h1>
      </header>

      {/* tabs */}
      <div className="mb-8 flex max-w-10xl justify-center rounded-full bg-gray-200 p-1 dark:bg-gray-800">
        {(['buyer', 'seller'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={clsx(
              'px-6 py-2 rounded-full',
              activeTab === t ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300'
            )}
          >
            {t[0].toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-gray-600 dark:text-gray-300">Loading…</p>
      ) : (
        <ul className="relative space-y-8 border-l border-gray-300 pl-8 dark:border-gray-700">
          {stages.map((s) => {
            const bar = Math.min(100, Math.round((s.duration / s.traditionalDuration) * 100));
            return (
              <li key={s.id} className="group">
                <span
                  className={clsx(
                    'absolute -left-4 flex h-6 w-6 items-center justify-center rounded-full border-2',
                    s.isCompleted
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'bg-white border-gray-300 text-gray-400 dark:bg-gray-900 dark:border-gray-600'
                  )}
                >
                  {s.isCompleted && <Check size={14} />}
                </span>
                <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
                  <div className="flex justify-between items-start">
                    <h3
                      className={clsx(
                        'font-semibold',
                        s.isCompleted
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-gray-900 dark:text-white'
                      )}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <p className="mb-2 text-base text-gray-600 dark:text-gray-300 line-clamp-3">
                    {s.description}
                  </p>
                  <p className="mb-3 text-base italic text-blue-600 dark:text-blue-400">{s.aiBenefit}</p>
                  <div className="mb-3 relative h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-blue-500"
                      style={{ width: `${bar}%` }}
                    />
                  </div>
                  <p className="text-base text-gray-500 dark:text-gray-400 mb-2 text-center">
                    With AI {s.duration}d vs. Traditional {s.traditionalDuration}d
                  </p>

                  <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Tasks</h4>
                  {s.tasks.length === 0 ? (
                    <p className="text-xs text-gray-400 dark:text-gray-500">No tasks for this stage.</p>
                  ) : (
                    <ul className="space-y-1.5">
                      {s.tasks.map((t) => (
                        <li
                          key={t.id}
                          className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                        >
                          <input
                            type="checkbox"
                            checked={t.isCompleted}
                            onChange={() => toggleTask(t)}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                          />
                          <span
                            className={clsx(
                              t.isCompleted && 'line-through text-gray-500 dark:text-gray-400'
                            )}
                          >
                            {t.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
<div className="flex justify-center">
  <button
    onClick={() => toggleStage(s)}
    className="text-lg rounded-full bg-green-600 px-20 py-5 text-white hover:bg-green-700"
  >
    {s.isCompleted ? '✔' : 'Mark Done'}
  </button>
</div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <Footer />
    </div>
  
);
}