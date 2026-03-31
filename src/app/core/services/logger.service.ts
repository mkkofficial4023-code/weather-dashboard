import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { LogEntry } from '../models/log.model';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private key = 'logs';

  constructor(private storage: StorageService) {} 

  log(message: string) {
    const logs: LogEntry[] = this.storage.get(this.key) || [];
    logs.unshift({
      message,
      timestamp: new Date()
    });
    this.storage.set(this.key, logs);
  }

  getLogs(): LogEntry[] {
    return this.storage.get(this.key) || [];
  }
}