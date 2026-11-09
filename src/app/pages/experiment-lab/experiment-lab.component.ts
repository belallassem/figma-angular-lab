import { Component } from '@angular/core';

export interface MetricCard {
  title: string;
  value: string;
  description: string;
  icon: string;
}

export interface ExperimentActivity {
  experiment: string;
  platform: 'Figma Make' | 'Antigravity' | 'GitHub' | 'Angular';
  status: 'Completed' | 'In Progress';
  createdBy: string;
}

export interface WorkflowStep {
  name: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-experiment-lab',
  standalone: true,
  templateUrl: './experiment-lab.component.html',
  styleUrl: './experiment-lab.component.scss'
})
export class ExperimentLabComponent {
  // Dummy overview metrics
  readonly metricCards: MetricCard[] = [
    {
      title: 'UI Experiments',
      value: '12',
      description: 'Design iterations completed',
      icon: '🎨'
    },
    {
      title: 'GitHub Commits',
      value: '24',
      description: 'Changes tracked in GitHub',
      icon: '🔄'
    },
    {
      title: 'Pull Requests',
      value: '8',
      description: 'Design changes submitted',
      icon: '🔀'
    },
    {
      title: 'Successful Builds',
      value: '100%',
      description: 'Angular build success rate',
      icon: '✅'
    }
  ];

  // Dummy recent experiment activity records
  readonly recentExperiments: ExperimentActivity[] = [
    {
      experiment: 'Homepage Header Update',
      platform: 'Figma Make',
      status: 'Completed',
      createdBy: 'Belal'
    },
    {
      experiment: 'Button Style Experiment',
      platform: 'Figma Make',
      status: 'Completed',
      createdBy: 'Belal'
    },
    {
      experiment: 'Angular Component Setup',
      platform: 'Antigravity',
      status: 'Completed',
      createdBy: 'Belal'
    },
    {
      experiment: 'GitHub Pull Request Test',
      platform: 'GitHub',
      status: 'Completed',
      createdBy: 'Belal'
    },
    {
      experiment: 'Design System Sync',
      platform: 'Angular',
      status: 'In Progress',
      createdBy: 'Belal'
    }
  ];

  // Horizontal design-to-code workflow steps
  readonly workflowSteps: WorkflowStep[] = [
    { name: 'Antigravity', icon: '🤖', description: 'Prompt & Scaffold' },
    { name: 'Angular', icon: '⚡', description: 'Component Code' },
    { name: 'GitHub', icon: '🐙', description: 'Version Control' },
    { name: 'Figma Make', icon: '🎨', description: 'Visual UI Edits' },
    { name: 'Pull Request', icon: '🔀', description: 'Design Review' },
    { name: 'Merge', icon: '🚀', description: 'Deploy Changes' }
  ];
}

